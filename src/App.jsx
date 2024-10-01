import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import * as styles from "./App.css";

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos`,
          {
            params: {
              query,
              page,
              per_page: 12,
              client_id: "IOSomVG1XQbYOHUXK4cpam1ynLzZW16kpz6BjJvANMQ",
            },
          }
        );

        if (response.data.results.length > 0) {
          setImages((prevImages) => [...prevImages, ...response.data.results]);
          setError(null); // Очищаємо помилку лише якщо є результати
        } else if (page === 1) {
          setError("No results found. Please try a different search term.");
        }
      } catch {
        setError("Error fetching images");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSearchSubmit = (searchQuery) => {
    if (searchQuery !== query) {
      setQuery(searchQuery);
      setImages([]);
      setPage(1);
      setError(null); // Очищення помилки перед новим пошуком
    }
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image); // Set the clicked image as selected
  };

  const closeModal = () => {
    setSelectedImage(null); // Clear the selected image to close the modal
  };

  return (
    <div className={styles.app}>
      <SearchBar onSubmit={handleSearchSubmit} setError={setError} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {loading && <Loader />}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onRequestClose={closeModal}
          image={selectedImage}
        />
      )}
    </div>
  );
};

export default App;
