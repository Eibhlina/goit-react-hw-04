import Modal from "react-modal";

export default function PhotoModal({
  modalIsOpen,
  afterOpenModal,
  closeModal,
  selectedPhoto,
}) {
  return (
    <div>
      <Modal
        className="modalStyle"
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Photo Modal"
      >
        <button onClick={closeModal}>Close</button>
        <img src={selectedPhoto} alt="Selected" />
      </Modal>
    </div>
  );
}
