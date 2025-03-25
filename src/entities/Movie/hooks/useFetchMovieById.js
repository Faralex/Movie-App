import { useState, useEffect } from "react";
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

const useFetchMovieById = (id) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.kinopoisk.dev/v1.4/movie/${id}`, {
          headers: { "X-API-KEY": API_TOKEN },
        });

        if (!response.ok) {
          throw new Error("Фильм не найден");
        }

        const data = await response.json();
        setMovie(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  return { movie, loading, error };
};

export default useFetchMovieById;
