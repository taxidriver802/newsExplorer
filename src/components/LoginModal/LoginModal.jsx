import './LoginModal.css';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import { signin } from '../../utils/auth.js';

function LoginModal({ setWhichModalOpen, setIsModalOpen, setUser }) {
  function handleSwitchToSignup() {
    setWhichModalOpen('signup');
  }

  function handleLoginSubmit(e) {
    e.preventDefault();
    /* set is loading true */
    const email = e.target.email.value;
    const password = e.target.password.value;
    signin(email, password).then((user) => {
      /* setUser(user); */
      console.log(user);
    });
    /* set is loading false */
    setIsModalOpen(false);
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
