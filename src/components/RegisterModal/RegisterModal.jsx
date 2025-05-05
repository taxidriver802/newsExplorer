import './RegisterModal.css';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import { signup } from '../../utils/auth';

function RegisterModal({ setIsModalOpen, setWhichModalOpen, setUser }) {
  function handleSwitchToSignin() {
    setWhichModalOpen('signin');
  }

  async function handleRegisterSubmit(event) {
    event.preventDefault();
    /* setIsLoading(true);  */
    const userInfo = {
      email: event.target.email.value,
      password: event.target.password.value,
      username: event.target.username.value,
    };

    try {
      const { token } = await signup(
        userInfo.email,
        userInfo.password,
        userInfo.username
      );
      console.log(token);

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
      setIsModalOpen(false);
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Failed to register. Please try again.');
    } finally {
      /* setIsLoading(false); */
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
            className="register__form-input"
            type="email"
            id="email"
            name="email"
            placeholder="Enter email"
            required
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
          />
        </div>
        <button className="register__form-submit" type="submit">
          Sign up
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
