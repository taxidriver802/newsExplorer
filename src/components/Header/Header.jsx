import { useState } from 'react';
import './Header.css';

import LoginModal from '../LoginModal/LoginModal';
import RegisterModal from '../RegisterModal/RegisterModal';

function Header() {
  const [whichModalOpen, setWhichModalOpen] = useState('signin');
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleClick() {
    setWhichModalOpen('signin');
    setIsModalOpen(true);
  }

  return (
    <>
      <div className="header">
        <h1 className="header__title">NewsExplorer</h1>
        <div className="header__buttons">
          <button type="button" className="header__button">
            Home
          </button>
          <button
            type="button"
            className="header__button header__button-signin"
            onClick={handleClick}
          >
            Sign In
          </button>
        </div>
      </div>

      {isModalOpen && whichModalOpen === 'signin' && (
        <LoginModal
          title="Sign in"
          setIsModalOpen={setIsModalOpen}
          setWhichModalOpen={setWhichModalOpen}
        />
      )}
      {isModalOpen && whichModalOpen === 'signup' && (
        <RegisterModal
          setIsModalOpen={setIsModalOpen}
          setWhichModalOpen={setWhichModalOpen}
        />
      )}
    </>
  );
}

export default Header;
