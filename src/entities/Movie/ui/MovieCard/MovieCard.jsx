import styles from "./MovieCard.module.css";

const MovieCard = ({ movie, onClick }) => {
  const title = movie.name || movie.alternativeName || movie.enName || "Без названия";
  const poster = movie.poster?.previewUrl;
  const year = movie.year ?? "Год неизвестен";
  const rating = movie.rating?.kp ?? "Нет данных";

  if (!poster) return null;

  return (
    <article className={styles.card} onClick={onClick}>
      <img src={poster} alt={title} className={styles.poster} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.year}>{year}</p>
      <p className={styles.rating}>{rating}</p>
    </article>
  );
};

export default MovieCard;
