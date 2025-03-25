import styles from "./MovieFilters.module.css";

const MovieFilters = ({
  genre,
  year,
  availableGenres,
  availableYears,
  onGenreChange,
  onYearChange,
  loadingGenres,
  errorGenres,
}) => {
  return (
    <div className={styles.filters}>
      {/*Жанры*/}
      <select value={genre} onChange={(e) => onGenreChange(e.target.value)}>
        <option value="">Все жанры</option>
        {loadingGenres && <option disabled>Загрузка жанров...</option>}
        {errorGenres && <option disabled>Ошибка загрузки жанров</option>}
        {!loadingGenres &&
          availableGenres.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
      </select>

      {/*Год */}
      <select value={year} onChange={(e) => onYearChange(e.target.value)}>
        <option value="">Все годы</option>
        {availableYears.map((y) => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MovieFilters;
