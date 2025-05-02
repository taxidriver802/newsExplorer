import './LoginModal.css';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import { signin } from '../../utils/auth.js';
import { useState } from 'react';

function LoginModal({ setWhichModalOpen, setIsModalOpen, setUser }) {
  const [isLoading, setIsLoading] = useState(false); // Add loading state

  function handleSwitchToSignup() {
    setWhichModalOpen('signup');
  }

  async function handleLoginSubmit(e) {
    e.preventDefault();
    setIsLoading(true); // Set loading to true
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      // Call the signin function to get the token
      const { token } = await signin(email, password);

      // Store the token in localStorage
      localStorage.setItem('jwt', token);

      // Fetch user data using the token
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
      setUser(userData); // Set user data in state
      setIsModalOpen(false); // Close the modal
    } catch (error) {
      console.error('Login failed:', error);
      alert('Invalid email or password');
    } finally {
      setIsLoading(false); // Set loading to false
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
            disabled={isLoading} // Disable button while loading
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
