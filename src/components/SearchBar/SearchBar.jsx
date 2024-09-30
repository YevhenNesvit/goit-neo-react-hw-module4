import { useState } from "react";
import { toast } from "react-toastify";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSubmit, setError }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Валідація на порожній запит
    if (query.trim() === "") {
      const errorMsg = "Please enter a search term.";
      setError(errorMsg);
      toast.error(errorMsg);
      return;
    }

    // Валідація на невалідний запит
    const isValidInput = /^[a-zA-Z0-9\s]+$/.test(query);
    if (!isValidInput) {
      const errorMsg =
        "Invalid input. Please use only letters, numbers, and spaces.";
      setError(errorMsg);
      toast.error(errorMsg);
      return;
    }

    setError(""); // Скидання помилки, якщо запит валідний

    try {
      const results = await onSubmit(query);
      if (!results || results.length === 0) {
        const errorMsg =
          "No results found. Please try a different search term.";
        setError(errorMsg);
        toast.error(errorMsg);
      }
    } catch {
      const errorMsg = "An error occurred while fetching data.";
      setError(errorMsg);
      toast.error(errorMsg);
    }

    setQuery("");
  };

  return (
    <header className={styles.searchBar}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search images and photos"
          autoComplete="off"
          autoFocus
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
