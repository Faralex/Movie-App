import styles from "./MovieInfo.module.css";

const MovieInfo = ({
  name,
  alternativeName,
  year,
  genres = [],
  countries = [],
  rating,
  description,
}) => {
  return (
    <div className={styles.info}>
      <h1 className={styles.title}>{name || alternativeName || "Без названия"}</h1>

      {year && (
        <p className={styles.year}>
          <strong>Год:</strong> {year}
        </p>
      )}

      {genres.length > 0 && (
        <p className={styles.genres}>
          <strong>Жанры:</strong>{" "}
          {genres
            .map((genre) => genre?.name)
            .filter(Boolean)
            .join(", ")}
        </p>
      )}

      {countries.length > 0 && (
        <p className={styles.countries}>
          <strong>Страны:</strong>{" "}
          {countries
            .map((country) => country?.name)
            .filter(Boolean)
            .join(", ")}
        </p>
      )}

      {rating && (
        <p className={styles.rating}>
          <strong>Рейтинг KP:</strong> {rating.kp ?? "Нет данных"}
        </p>
      )}

      <p className={styles.description}>{description || "Описание отсутствует"}</p>
    </div>
  );
};

export default MovieInfo;
