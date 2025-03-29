import { useEffect } from "react";

const useSyncSearchParams = ({ page, query, genre, year, setSearchParams }) => {
  useEffect(() => {
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);

      newParams.set("page", page);

      if (query.trim()) {
        newParams.set("query", query);
      } else {
        newParams.delete("query");
      }

      if (genre) {
        newParams.set("genre", genre);
      } else {
        newParams.delete("genre");
      }

      if (year) {
        newParams.set("year", year);
      } else {
        newParams.delete("year");
      }

      return newParams;
    });
  }, [page, query, genre, year, setSearchParams]);
};

export default useSyncSearchParams;
