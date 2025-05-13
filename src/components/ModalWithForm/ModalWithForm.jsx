import { useEffect } from 'react';
import './ModalWithForm.css';

function ModalWithForm({ title, children, onSubmit, setIsModalOpen }) {
  function handleClose() {
    setIsModalOpen(false);
  }

  function handleEscPress(e) {
    if (e.key === 'Escape') {
      handleClose();
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleEscPress);

    return () => {
      document.removeEventListener('keydown', handleEscPress);
    };
  });

  return (
    <div className="modal">
      <div className="modal__overlay" onClick={handleClose}></div>
      <div className="modal__content">
        <h1 className="modal__title">{title}</h1>
        <button type="button" className="modal__close" onClick={handleClose}>
          <img
            src="src/assets/icons/close.svg"
            alt="Close"
            className="modal__close-icon"
          />
        </button>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
