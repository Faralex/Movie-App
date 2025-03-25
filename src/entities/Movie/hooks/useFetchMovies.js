import { useState, useEffect } from "react";

const API_TOKEN = import.meta.env.VITE_API_TOKEN;

const useFetchMovies = ({ page, query, genre, year, limit = 18 }) => {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setError(null);
      setLoading(true);

      try {
        let url;

        if (query.trim() !== "") {
          url = `https://api.kinopoisk.dev/v1.4/movie/search?page=${page}&limit=${limit}&query=${encodeURIComponent(
            query
          )}`;
        } else {
          url = `https://api.kinopoisk.dev/v1.4/movie?page=${page}&limit=${limit}&sortField=rating.kp&sortType=-1&type=movie`;
        }

        if (genre) {
          url += `&genres.name=${encodeURIComponent(genre)}`;
        }

        if (year) {
          url += `&year=${year}`;
        }

        const response = await fetch(url, {
          headers: {
            "X-API-KEY": API_TOKEN,
          },
        });

        if (!response.ok) {
          throw new Error(`Ошибка: ${response.status}`);
        }

        const data = await response.json();

        setMovies(data.docs);

        const totalMovies = data.total ?? data.docs.length;
        const pages = Math.ceil(totalMovies / limit);
        setTotalPages(pages);
      } catch (err) {
        setError(err.message || "Что-то пошло не так");
      } finally {
        setLoading(false);
      }
    };
    console.log("📦 useFetchMovies → page:", page, "query:", query);
    fetchMovies();
  }, [page, query, genre, year, limit]);

  return {
    movies,
    totalPages,
    loading,
    error,
  };
};

export default useFetchMovies;
