import { useState } from 'react';
import './Header.css';

import LoginModal from '../LoginModal/LoginModal';
import RegisterModal from '../RegisterModal/RegisterModal';

function Header({ user, setUser }) {
  const [whichModalOpen, setWhichModalOpen] = useState('signin');
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleSignInClick() {
    setWhichModalOpen('signin');
    setIsModalOpen(true);
  }

  function handleSignOutClick() {
    setUser({ email: '', password: '', username: '' });
  }

  return (
    <>
      <div className="header">
        <h1 className="header__title">NewsExplorer</h1>
        <div className="header__buttons">
          <button type="button" className="header__button">
            Home
          </button>
          {user.username ? (
            <div className="header__button-loggedin-container">
              <div className="header__button-loggedin">
                <button
                  type="button"
                  className="header__button header__button-signout"
                  onClick={handleSignOutClick}
                >
                  {user.username}
                  <img
                    src="src/assets/icons/Union.svg"
                    alt="User Icon"
                    className="header__user-icon"
                  />
                </button>
              </div>
            </div>
          ) : (
            <button
              type="button"
              className="header__button header__button-signin"
              onClick={handleSignInClick}
            >
              Sign In
            </button>
          )}
        </div>
      </div>

      {isModalOpen && whichModalOpen === 'signin' && (
        <LoginModal
          title="Sign in"
          setIsModalOpen={setIsModalOpen}
          setWhichModalOpen={setWhichModalOpen}
          setUser={setUser}
        />
      )}
      {isModalOpen && whichModalOpen === 'signup' && (
        <RegisterModal
          setIsModalOpen={setIsModalOpen}
          setWhichModalOpen={setWhichModalOpen}
          setUser={setUser}
        />
      )}
    </>
  );
}

export default Header;
