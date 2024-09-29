import { useState } from "react";
import ImageCard from "../ImageCard/ImageCard";
import ImageModal from "../ImageModal/ImageModal";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <ul className={styles.galleryContainer}>
        {images.map((image) => (
          <li key={image.id} onClick={() => openModal(image)}>
            <ImageCard src={image.urls.small} alt={image.alt_description} />
          </li>
        ))}
      </ul>
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        image={selectedImage}
      />
    </>
  );
};

export default ImageGallery;
