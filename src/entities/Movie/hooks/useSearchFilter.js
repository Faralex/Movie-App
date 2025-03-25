import { useState } from "react";

const useSearchFilter = ({
  initialQuery = "",
  initialGenre = "",
  initialYear = "",
  onResetPage = () => {},
  setSearchParams,
}) => {
  const [query, setQuery] = useState(initialQuery);
  const [genre, setGenre] = useState(initialGenre);
  const [year, setYear] = useState(initialYear);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    onResetPage();
  };

  const handleClearSearch = () => {
    setQuery("");
    setGenre("");
    setYear("");
    onResetPage();
    setSearchParams({});
  };

  return {
    query,
    genre,
    year,
    setQuery,
    setGenre,
    setYear,
    handleSearch,
    handleClearSearch,
  };
};

export default useSearchFilter;
