import { useSearchParams } from "react-router-dom";
import useGenresFilter from "../../../../entities/Movie/hooks/useGenresFilter.js";
import useFetchMovies from "../../../../entities/Movie/hooks/useFetchMovies.js";
import usePagination from "../../../../entities/Movie/hooks/usePagination.js";
import useSyncSearchParams from "../../../../entities/Movie/hooks/useSyncSearchParams.js";
import useYearsFilter from "../../../../entities/Movie/hooks/useYearsFilter.js";
import useSearchFilter from "../../../../entities/Movie/hooks/useSearchFilter.js";
import useDebounce from "../../../../entities/Movie/hooks/useDebounce.js";
import MovieListContent from "../MovieListContent/MovieListContent.jsx";
import MovieListHeader from "../MovieListHeader/MovieListHeader.jsx";

import styles from "./MovieList.module.css";

const MovieList = () => {
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
      <MovieListHeader
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

      <MovieListContent
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

export default MovieList;
