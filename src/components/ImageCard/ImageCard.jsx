import styles from "./ImageCard.module.css";

const ImageCard = ({ src, alt, onClick }) => {
  return (
    <div className={styles.imageCard}>
      <img
        src={src}
        alt={alt}
        onClick={onClick} // Додаємо обробник події кліку
        style={{ cursor: "pointer" }} // Змінюємо курсор на pointer для візуального ефекту
      />
    </div>
  );
};

export default ImageCard;
