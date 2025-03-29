import { MovieFilters } from "../../../../features/MovieFilters";
import { SearchBar } from "../../../../features/SearchBar/Index";
import styles from "./MoviePageHeader.module.css";

const MoviePageHeader = ({
  query,
  loading,
  handleSearch,
  handleClearSearch,
  genre,
  year,
  availableGenres,
  availableYears,
  loadingGenres,
  errorGenres,
  onGenreChange,
  onYearChange,
}) => {
  return (
    <div className={styles.headerContainer}>
      <h2 className={styles.title}>
        {query ? `Результаты поиска: "${query}"` : "Популярные фильмы"}
        {loading && <span className={styles.loading}>Загрузка...</span>}
      </h2>

      <SearchBar onSearch={handleSearch} onClear={handleClearSearch} query={query} />

      <MovieFilters
        genre={genre}
        year={year}
        availableGenres={availableGenres}
        availableYears={availableYears}
        loadingGenres={loadingGenres}
        errorGenres={errorGenres}
        onGenreChange={onGenreChange}
        onYearChange={onYearChange}
      />
    </div>
  );
};

export default MoviePageHeader;
