import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={styles.galleryContainer}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard 
            src={image.urls.small} 
            alt={image.alt_description} 
            onClick={() => onImageClick(image)} // Передаємо функцію onClick
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;