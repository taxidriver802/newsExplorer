import './RegisterModal.css';
import ModalWithForm from '../ModalWithForm/ModalWithForm';

function RegisterModal({ setIsModalOpen, setWhichModalOpen }) {
  function handleSwitchToSignin() {
    setWhichModalOpen('signin');
  }

  function handleRegisterSubmit(event) {
    event.preventDefault();
    // Add registration logic here
    console.log('Register form submitted');
  }

  return (
    <ModalWithForm
      title="Sign up"
      onSubmit={handleRegisterSubmit}
      setIsModalOpen={setIsModalOpen}
    >
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" required />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" required />
      <label htmlFor="username">Username</label>
      <input type="text" id="username" name="username" required />
      <button type="submit">Sign up</button>
      <button type="button" onClick={handleSwitchToSignin}>
        or Sign in
      </button>
    </ModalWithForm>
  );
}

export default RegisterModal;
