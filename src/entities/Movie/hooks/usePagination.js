import { useState, useCallback } from "react";

const usePagination = (initialPage = 1, totalPages = 1) => {
  const [page, setPage] = useState(initialPage);

  const handleNextPage = useCallback(() => {
    setPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : prevPage));
  }, [totalPages]);

  const handlePrevPage = useCallback(() => {
    setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  }, []);

  const handleFirstPage = useCallback(() => {
    setPage(1);
  }, []);

  const handleLastPage = useCallback(() => {
    setPage(totalPages);
  }, [totalPages]);

  return {
    page,
    setPage,
    handleNextPage,
    handlePrevPage,
    handleFirstPage,
    handleLastPage,
  };
};

export default usePagination;
