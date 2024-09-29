import styles from './ImageCard.module.css';

const ImageCard = ({ src, alt }) => {
  return (
    <div className={styles.imageCard}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default ImageCard;
