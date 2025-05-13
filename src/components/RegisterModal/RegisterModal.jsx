import './RegisterModal.css';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import useFormValidation from '../../utils/FormValidator';
import { signup } from '../../utils/auth';

function RegisterModal({
  setIsModalOpen,
  setWhichModalOpen,
  setIsLoading,
  isLoading,
}) {
  const { values, errors, isFormValid, handleChange, resetForm } =
    useFormValidation({
      email: '',
      password: '',
      username: '',
    });
  function handleSwitchToSignin() {
    setWhichModalOpen('signin');
  }

  async function handleRegisterSubmit(event) {
    event.preventDefault();
    if (!isFormValid) return;

    setIsLoading(true);

    try {
      const { token } = await signup(
        values.email,
        values.password,
        values.username
      );

      localStorage.setItem('jwt', token);

      const userResponse = await fetch('http://localhost:3001/users/me', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!userResponse.ok) {
        throw new Error('Failed to fetch user data');
      }
      setWhichModalOpen('registerSuccess');
      resetForm();
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Failed to register. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <ModalWithForm
      title="Sign up"
      onSubmit={handleRegisterSubmit}
      setIsModalOpen={setIsModalOpen}
    >
      <div className="register__form">
        <div className="register__form-inputs">
          <label className="register__form-label" htmlFor="email">
            Email
          </label>
          <input
            autoFocus
            className="register__form-input"
            type="email"
            id="email"
            name="email"
            placeholder="Enter email"
            required
            onChange={handleChange}
            value={values.email}
          />

          <label className="register__form-label" htmlFor="password">
            Password
          </label>
          <input
            className="register__form-input"
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
            required
            minLength="4"
            value={values.password}
            onChange={handleChange}
          />

          <label className="register__form-label" htmlFor="username">
            Username
          </label>
          <input
            className="register__form-input"
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            required
            value={values.username}
            onChange={handleChange}
          />
        </div>

        {Object.values(errors).some((e) => e) && (
          <div className="register__form-errors">
            <ul>
              {['email', 'password', 'username'].map(
                (field) => errors[field] && <li key={field}>{errors[field]}</li>
              )}
            </ul>
          </div>
        )}

        <button
          className={`register__form-submit ${
            !isFormValid ? 'register__form-error-disable' : ''
          }`}
          type="submit"
          disabled={!isFormValid || isLoading}
        >
          {isLoading ? 'Signing up...' : 'Sign up'}
        </button>
        <div className="register__form-button-switch">
          <h3 className="register__form-or">or</h3>
          <button
            className="register__form-button register__form-button-signup"
            type="button"
            onClick={handleSwitchToSignin}
          >
            Sign in
          </button>
        </div>
      </div>
    </ModalWithForm>
  );
}

export default RegisterModal;
