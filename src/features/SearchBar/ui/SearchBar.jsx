import { useState } from "react";
import { useEffect } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSearch, onClear, query }) => {
  const [inputValue, setInputValue] = useState(query || "");

  useEffect(() => {
    setInputValue(query);
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      onSearch(inputValue);
    }
  };

  const handleClear = () => {
    setInputValue("");
    onClear(); 
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <input
        type="text"
        placeholder="Поиск фильмов..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className={styles.searchInput}
      />
      <button type="submit" className={styles.searchButton}>
        Поиск
      </button>
      {query && (
        <button type="button" onClick={handleClear} className={styles.clearButton}>
          ✖ Очистить
        </button>
      )}
    </form>
  );
};

export default SearchBar;
