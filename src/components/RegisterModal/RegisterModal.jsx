import './RegisterModal.css';

import ModalWithForm from '../ModalWithForm/ModalWithForm';

function RegisterModal({ setIsModalOpen, setWhichModalOpen }) {
  function handleClick() {
    setWhichModalOpen('signin');
  }
  return (
    <div className="register">
      <ModalWithForm title="Sign up" setIsModalOpen={setIsModalOpen} />
      <label htmlFor="email">Email</label>
      <input type="text" id="email" />
      <label htmlFor="password">Password</label>
      <input type="text" id="password" />
      <label htmlFor="username">Username</label>
      <input type="text" id="username" />
      <button type="submit">Sign up</button>
      <button type="button" onClick={handleClick}>
        or Sign in
      </button>
    </div>
  );
}

export default RegisterModal;
