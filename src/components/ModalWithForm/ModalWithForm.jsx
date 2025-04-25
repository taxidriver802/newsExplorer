import './ModalWithForm.css';

function ModalWithForm({ title, setIsModalOpen }) {
  function handleClose() {
    setIsModalOpen(false);
  }

  return (
    <div className="modal">
      <h1 className="modal__title">{title}</h1>
      <div className="modal__close">
        <button type="button" onClick={handleClose}>
          X
        </button>
      </div>
    </div>
  );
}

export default ModalWithForm;
