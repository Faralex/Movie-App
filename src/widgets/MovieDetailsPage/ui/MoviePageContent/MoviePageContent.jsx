import { useNavigate } from "react-router-dom";
import styles from "./MoviePageContent.module.css";
import PaginationButtons from "../../../../shared/ui/PaginationButtons/PaginationButtons";
import SkeletonCard from "../../../../shared/ui/SkeletonCard/SkeletonCard";
import { MovieCard } from "../../../../entities/Movie/ui";

const MoviePageContent = ({
  loading,
  error,
  movies,
  limit,
  page,
  totalPages,
  handleFirstPage,
  handlePrevPage,
  handleNextPage,
  handleLastPage,
}) => {
  const navigate = useNavigate();

  if (error) {
    return <p className={styles.error}>Ошибка: {error}</p>;
  }

  return (
    <>
      {!loading && totalPages > 1 && (
        <PaginationButtons
          page={page}
          totalPages={totalPages}
          onFirst={handleFirstPage}
          onPrev={handlePrevPage}
          onNext={handleNextPage}
          onLast={handleLastPage}
        />
      )}

      <ul className={styles.list}>
        {loading
          ? Array.from({ length: limit }).map((_, index) => <SkeletonCard key={index} />)
          : movies
              .filter((movie) => movie.poster?.previewUrl)
              .map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  onClick={() => navigate(`/movie/${movie.id}`)}
                />
              ))}
      </ul>

      {!loading && totalPages > 1 && (
        <PaginationButtons
          page={page}
          totalPages={totalPages}
          onFirst={handleFirstPage}
          onPrev={handlePrevPage}
          onNext={handleNextPage}
          onLast={handleLastPage}
        />
      )}
    </>
  );
};

export default MoviePageContent;
