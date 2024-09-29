import Modal from "react-modal";

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
        content: {
          border: "none",
          background: "transparent",
          padding: "0",
        },
      }}
    >
      {image && (
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          style={{
            width: "100%",
            height: "auto",
            cursor: "pointer",
          }}
          onClick={onRequestClose} // Закриває модальне вікно при кліку на зображення
        />
      )}
    </Modal>
  );
};

export default ImageModal;
