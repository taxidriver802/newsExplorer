import React, { useEffect, useRef } from 'react';

import './HeaderMenu.css';

function HeaderMenu({
  button,
  user,
  handleSignInClick,
  handleSignOutClick,
  setButton,
  setIsDropdownOpen,
}) {
  const isSavedPage = button === 'saved';
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setIsDropdownOpen]);
  return (
    <div className="header__menu-small" ref={menuRef}>
      <div className="header__buttons-small">
        <div className="header__button-home-container-small">
          <button
            type="button"
            className={`header__button-small ${
              button === 'home' ? 'header__button-home-small' : ''
            }${isSavedPage ? ' header_saved-button-small' : ''}`}
            onClick={() => {
              setButton('home');
              setIsDropdownOpen(false);
            }}
          >
            Home
          </button>
        </div>
        {user.username ? (
          <>
            <button
              className={
                'header__button-saved-small' +
                (isSavedPage ? ' header_saved-articles' : '')
              }
              type="button"
              onClick={() => {
                setButton('saved');
                setIsDropdownOpen(false);
              }}
            >
              Saved articles
            </button>
            <button
              type="button"
              className={
                'header__button-small header__button-signout-small' +
                (isSavedPage ? ' header_saved-button-small' : '')
              }
              onClick={handleSignOutClick}
            >
              <span className="header__username-small">{user.username}</span>
              <img
                src={`src/assets/icons/${
                  isSavedPage ? 'DarkUnion' : 'Union'
                }.svg`}
                alt="User Icon"
                className="header__user-icon-small"
              />
            </button>
          </>
        ) : (
          <button
            type="button"
            className="header__button-small header__button-signin-small"
            onClick={handleSignInClick}
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
}

export default HeaderMenu;
