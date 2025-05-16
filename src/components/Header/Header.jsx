import { useState } from 'react';
import './Header.css';

import LoginModal from '../LoginModal/LoginModal';
import RegisterModal from '../RegisterModal/RegisterModal';
import RegisterModalSuccess from '../RegisterModalSuccess/RegisterModalSuccess';

function Header({
  user,
  setUser,
  setButton,
  button,
  setUpdateTrigger,
  setIsDropdownOpen,
  isDropdownOpen,
  handleSignInClick,
  handleSignOutClick,
  isModalOpen,
  setIsModalOpen,
  whichModalOpen,
  setWhichModalOpen,
}) {
  const [isLoading, setIsLoading] = useState(false);

  const isSavedPage = button === 'saved';

  function renderModal() {
    if (!isModalOpen) return null;
    if (whichModalOpen === 'signin')
      return (
        <LoginModal
          setIsModalOpen={setIsModalOpen}
          setWhichModalOpen={setWhichModalOpen}
          setUser={setUser}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          setUpdateTrigger={setUpdateTrigger}
        />
      );
    if (whichModalOpen === 'signup')
      return (
        <RegisterModal
          setIsModalOpen={setIsModalOpen}
          setWhichModalOpen={setWhichModalOpen}
          setUser={setUser}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      );
    if (whichModalOpen === 'registerSuccess')
      return (
        <RegisterModalSuccess
          setWhichModalOpen={setWhichModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      );
  }

  function handleMenuClick(e) {
    e.stopPropagation();
    setTimeout(() => {
      setIsDropdownOpen((prev) => !prev);
    }, 10);
  }

  return (
    <>
      <div
        className={`header${isSavedPage ? ' header_saved' : ''} ${
          isDropdownOpen ? 'header__menu-open' : ''
        }`}
      >
        <h1 className="header__title">NewsExplorer</h1>
        <div className="header__menu">
          <button
            className={`header__menu-icon ${
              isDropdownOpen ? 'header__menu-icon_active' : ''
            }`}
            aria-label="Open menu"
            onClick={handleMenuClick}
          ></button>
          <div className="header__buttons">
            <div className="header__button-home-container">
              <button
                type="button"
                className={`header__button ${
                  button === 'home' ? 'header__button-home' : ''
                }${isSavedPage ? ' header_saved-button' : ''}`}
                onClick={() => {
                  setButton('home');
                }}
              >
                Home
              </button>
            </div>
            {user.username ? (
              <>
                <button
                  className={
                    'header__button-saved' +
                    (isSavedPage ? ' header_saved-articles' : '')
                  }
                  type="button"
                  onClick={() => {
                    setButton('saved');
                  }}
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
                  <img
                    src={`src/assets/icons/${
                      isSavedPage ? 'DarkUnion' : 'Union'
                    }.svg`}
                    alt="User Icon"
                    className="header__user-icon"
                  />
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
      </div>
      {renderModal()}
    </>
  );
}

export default Header;
