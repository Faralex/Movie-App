import styles from "./MoviePoster.module.css";

const MoviePoster = ({ poster, name }) => {
  if (!poster || !poster.url) {
    return <div className={styles.noPoster}>Нет изображения</div>;
  }

  return (
    <div className={styles.posterWrapper}>
      <img src={poster.url} alt={name || "Постер"} className={styles.poster} />
    </div>
  );
};

export default MoviePoster;
