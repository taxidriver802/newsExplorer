import { useState } from 'react';
import './Header.css';

import LoginModal from '../LoginModal/LoginModal';
import RegisterModal from '../RegisterModal/RegisterModal';

function Header() {
  const [whichModalOpen, setWhichModalOpen] = useState('signin');
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleClick() {
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
      <div className="header__line"></div>

      {isModalOpen && whichModalOpen === 'signin' && (
        <LoginModal
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
