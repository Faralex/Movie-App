import YearSelect from "../../../features/YearSelect";
import GenreSelect from "../../../features/GenreSelect";
import styles from "./MovieFilters.module.css";

const MovieFilters = ({
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
    <div className={styles.filters}>
      <GenreSelect
        value={genre}
        onChange={onGenreChange}
        genres={availableGenres}
        loading={loadingGenres}
        error={errorGenres}
      />

      <YearSelect value={year} onChange={onYearChange} years={availableYears} />
    </div>
  );
};

export default MovieFilters;
