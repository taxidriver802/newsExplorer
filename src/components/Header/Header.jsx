import { useState } from 'react';
import './Header.css';

import LoginModal from '../LoginModal/LoginModal';
import RegisterModal from '../RegisterModal/RegisterModal';

function Header({ user, setUser, setButton, button }) {
  const [whichModalOpen, setWhichModalOpen] = useState('signin');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isSavedPage = button === 'saved';

  function handleSignInClick() {
    setWhichModalOpen('signin');
    setIsModalOpen(true);
  }

  function handleSignOutClick() {
    setUser({ email: '', password: '', username: '' });
    localStorage.removeItem('jwt');
    setButton('home');
  }

  return (
    <>
      <div className={'header' + (isSavedPage ? ' header_saved' : '')}>
        <h1 className="header__title">NewsExplorer</h1>
        <div className="header__buttons">
          <button
            type="button"
            className={
              'header__button' + (isSavedPage ? ' header_saved-button' : '')
            }
            onClick={() => setButton('home')}
          >
            Home
          </button>
          {user.username ? (
            <>
              <button
                className={
                  'header__button-saved' +
                  (isSavedPage ? ' header_saved-articles' : '')
                }
                type="button"
                onClick={() => setButton('saved')}
              >
                Saved articles
              </button>
              <button
                type="button"
                className={
                  'header__button header__button-signout' +
                  (isSavedPage ? ' header_saved-button' : '')
                }
                onClick={handleSignOutClick}
              >
                <span className="header__username">{user.username}</span>
                {!isSavedPage ? (
                  <img
                    src="src/assets/icons/Union.svg"
                    alt="User Icon"
                    className="header__user-icon"
                  />
                ) : (
                  <img
                    src="src/assets/icons/DarkUnion.svg"
                    alt="User Icon"
                    className="header__user-icon"
                  />
                )}
              </button>
            </>
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
