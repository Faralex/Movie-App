import SearchBar from "../../../../features/SearchBar/ui/SearchBar";
import MovieFilters from "../../../../features/MovieFiltes/ui/MovieFilters";

import styles from "./MovieListHeader.module.css";

const MovieListHeader = ({
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

export default MovieListHeader;
