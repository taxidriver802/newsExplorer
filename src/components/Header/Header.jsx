import { useState, useEffect } from 'react';
import './Header.css';

import LoginModal from '../LoginModal/LoginModal';
import RegisterModal from '../RegisterModal/RegisterModal';

function Header({ user, setUser, button, setButton }) {
  const [whichModalOpen, setWhichModalOpen] = useState('signin');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('jwt');

    if (token) {
      fetch('http://localhost:3001/users/me', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((userData) => {
          setUser(userData);
        })
        .catch((err) => {
          console.error('Failed to fetch user data:', err);
          localStorage.removeItem('jwt');
        });
    }
  }, [setUser]);

  function handleSignInClick() {
    setWhichModalOpen('signin');
    setIsModalOpen(true);
  }

  function handleSignOutClick() {
    setUser({ email: '', password: '', username: '' });
    localStorage.removeItem('jwt');
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
            <>
              <button
                className="header__button-saved"
                type="button"
                onClick={() => setButton('saved')}
              >
                Saved articles
              </button>
              <button
                type="button"
                className="header__button header__button-signout"
                onClick={handleSignOutClick}
              >
                <span className="header__username">{user.username}</span>
                <img
                  src="src/assets/icons/Union.svg"
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
