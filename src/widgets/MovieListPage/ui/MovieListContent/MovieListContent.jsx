import styles from "./MovieListContent.module.css";
import PaginationButtons from "../../../../shared/ui/PaginationButtons/PaginationButtons";
import SkeletonCard from "../../../../shared/ui/SkeletonCard/SkeletonCard";
import MovieCard from "../../../../entities/Movie/ui/MovieCard/MovieCard";

const MovieListContent = ({
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
}) => (
  <>
    {error && <p className={styles.error}>Ошибка: {error}</p>}

    {!error && totalPages > 1 && (
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
            .map((movie) => <MovieCard key={movie.id} movie={movie} />)}
    </ul>

    {!loading && !error && totalPages > 1 && (
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

export default MovieListContent;
