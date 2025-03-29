import { useSearchParams } from "react-router-dom";
import useGenresFilter from "../../../../entities/Movie/hooks/useGenresFilter.js";
import useFetchMovies from "../../../../entities/Movie/hooks/useFetchMovies.js";
import usePagination from "../../../../shared/hooks/usePagination.js";
import useSyncSearchParams from "../../../../shared/hooks/useSyncSearchParams.js";
import useYearsFilter from "../../../../entities/Movie/hooks/useYearsFilter.js";
import useSearchFilter from "../../../../entities/Movie/hooks/useSearchFilter.js";
import useDebounce from "../../../../shared/hooks/useDebounce.js";
import MoviePageContent from "../MoviePageContent/MoviePageContent.jsx";
import MoviePageHeader from "../MoviePageHeader/MoviePageHeader.jsx";

import styles from "./MoviePage.module.css";

const MoviePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const queryParam = searchParams.get("query") || "";
  const pageParam = Number(searchParams.get("page")) || 1;
  const genreParam = searchParams.get("genre") || "";
  const yearParam = searchParams.get("year") || "";

  const limit = 18;

  const { query, genre, year, setGenre, setYear, handleSearch, handleClearSearch } =
    useSearchFilter({
      initialQuery: queryParam,
      initialGenre: genreParam,
      initialYear: yearParam,
      onResetPage: () => setPage(1),
      setSearchParams,
    });

  const debouncedQuery = useDebounce(query, 500);

  const { movies, totalPages, loading, error } = useFetchMovies({
    page: pageParam,
    query: debouncedQuery,
    genre,
    year,
    limit,
  });

  const { page, setPage, handleNextPage, handlePrevPage, handleFirstPage, handleLastPage } =
    usePagination(pageParam, totalPages || 1);

  const { availableGenres, loadingGenres, errorGenres } = useGenresFilter();
  const { availableYears } = useYearsFilter(2024, 1980);

  useSyncSearchParams({
    page,
    query,
    genre,
    year,
    setSearchParams,
  });

  return (
    <div className={styles.container}>
      <MoviePageHeader
        query={query}
        loading={loading}
        handleSearch={handleSearch}
        handleClearSearch={handleClearSearch}
        genre={genre}
        year={year}
        availableGenres={availableGenres}
        availableYears={availableYears}
        loadingGenres={loadingGenres}
        errorGenres={errorGenres}
        onGenreChange={(newGenre) => {
          setGenre(newGenre);
          setPage(1);
        }}
        onYearChange={(newYear) => {
          setYear(newYear);
          setPage(1);
        }}
      />

      <MoviePageContent
        loading={loading}
        error={error}
        movies={movies}
        limit={limit}
        page={page}
        totalPages={totalPages}
        handleFirstPage={handleFirstPage}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        handleLastPage={handleLastPage}
      />
    </div>
  );
};

export default MoviePage;
