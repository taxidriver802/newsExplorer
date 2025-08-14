import './RegisterModalSuccess.css';

import ModalWithForm from '../ModalWithForm/ModalWithForm';

function RegisterModalSuccess({ setIsModalOpen, setWhichModalOpen }) {
  function handleSwitchToSignin() {
    setWhichModalOpen('signin');
  }

  return (
    <div className="register-success">
      <ModalWithForm
        title="Registration successfully completed!"
        setIsModalOpen={setIsModalOpen}
      >
        <button
          className="register-success-btn"
          type="button"
          onClick={handleSwitchToSignin}
        >
          Sign in
        </button>
      </ModalWithForm>
    </div>
  );
}

export default RegisterModalSuccess;
