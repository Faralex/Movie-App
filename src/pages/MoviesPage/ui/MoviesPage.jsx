import { useParams } from "react-router-dom";
import useFetchMovieById from "../../../entities/Movie/hooks/useFetchMovieById";
import { MoviePoster, MovieInfo } from "../../../entities/Movie/ui";
import BackButton from "../../../shared/ui/BackButton/BackButton";
import styles from "./MoviesPage.module.css";

const MoviesPage = () => {
  const { id } = useParams();

  const { movie, loading, error } = useFetchMovieById(id);

  if (loading) return <p className={styles.loading}>Загрузка...</p>;
  if (error) return <p className={styles.error}>Ошибка: {error}</p>;
  if (!movie) return <p className={styles.error}>Фильм не найден.</p>;

  return (
    <div className={styles.container}>
      <BackButton />

      <div className={styles.content}>
        <MoviePoster poster={movie.poster} name={movie.name} />

        <MovieInfo
          name={movie.name}
          alternativeName={movie.alternativeName}
          year={movie.year}
          genres={movie.genres || []}
          countries={movie.countries || []}
          rating={movie.rating}
          description={movie.description}
        />
      </div>
    </div>
  );
};

export default MoviesPage;
