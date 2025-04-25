import './LoginModal.css';
import ModalWithForm from '../ModalWithForm/ModalWithForm';

function LoginModal({ setWhichModalOpen, setIsModalOpen }) {
  function handleSwitchToSignup() {
    setWhichModalOpen('signup');
  }

  function handleLoginSubmit(e) {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log('Login form submitted', email, password);
  }

  return (
    <ModalWithForm
      title="Sign in"
      onSubmit={handleLoginSubmit}
      setIsModalOpen={setIsModalOpen}
    >
      <div className="login__form">
        <div className="login__form-inputs">
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
          />

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
          />
        </div>
        <div className="login__form-buttons">
          <button
            className="login__form-button login__form-button-signin"
            type="submit"
          >
            Sign in
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
