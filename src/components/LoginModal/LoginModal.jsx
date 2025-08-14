import './LoginModal.css';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import useFormValidation from '../../utils/FormValidator';
import { signin } from '../../utils/auth.js';

function LoginModal({
  setWhichModalOpen,
  setIsModalOpen,
  setUser,
  setIsLoading,
  isLoading,
  setUpdateTrigger,
}) {
  const { values, errors, isFormValid, handleChange, resetForm } =
    useFormValidation({
      email: '',
      password: '',
    });

  function handleSwitchToSignup() {
    setWhichModalOpen('signup');
  }

  async function handleLoginSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const { token } = await signin(email, password);

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

      const userData = await userResponse.json();
      setUser(userData);
      setUpdateTrigger((prev) => !prev);
      setIsModalOpen(false);
    } catch (error) {
      console.error('Login failed:', error);
      alert('Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <ModalWithForm
      title="Sign in"
      onSubmit={handleLoginSubmit}
      setIsModalOpen={setIsModalOpen}
    >
      <div className="login__form">
        <div className="login__form-inputs">
          {/* Email Input */}
          <label className="login__form-label" htmlFor="email">
            Email
          </label>
          <input
            className="login__form-input"
            type="email"
            id="email"
            name="email"
            placeholder="Enter email"
            required
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="login__form-errors login__form-errors-text">
              {errors.email}
            </p>
          )}

          {/* Password Input */}
          <label className="login__form-label" htmlFor="password">
            Password
          </label>
          <input
            className="login__form-input"
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
            required
            value={values.password}
            onChange={handleChange}
            minLength="4"
          />
          {errors.password && (
            <p className="login__form-errors login__form-errors-text">
              {errors.password}
            </p>
          )}
        </div>

        <div className="login__form-buttons">
          <button
            className={`login__form-button-signin ${
              !isFormValid ? 'login__form-error-disable' : ''
            }`}
            type="submit"
            disabled={!isFormValid}
          >
            {isLoading ? 'Signing in...' : 'Sign in'}
          </button>
          <div className="login__form-button-switch">
            <h3 className="login__form-or">or</h3>
            <button
              className="login__form-button login__form-button-signup"
              type="button"
              onClick={handleSwitchToSignup}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </ModalWithForm>
  );
}

export default LoginModal;
