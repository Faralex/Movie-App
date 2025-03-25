import styles from "./MovieCard.module.css";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const title = movie.name || movie.alternativeName || movie.enName || "Без названия";
  const poster = movie.poster?.previewUrl;
  const year = movie.year ?? "Год неизвестен";
  const rating = movie.rating?.kp ?? "Нет данных";

  if (!poster) return null;

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      {poster && <img src={poster} alt={title} className={styles.poster} />}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.year}>{year}</p>
      <p className={styles.rating}>{rating}</p>
    </div>
  );
};
export default MovieCard;
