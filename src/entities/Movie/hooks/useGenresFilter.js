import { useEffect, useState } from "react";

const API_TOKEN = "1N66Q7E-EDK4XZ8-N4WRKB8-BCFNRVH";

const useGenresFilter = () => {
  const [availableGenres, setAvailableGenres] = useState([]);
  const [loadingGenres, setLoadingGenres] = useState(false);
  const [errorGenres, setErrorGenres] = useState(null);

  useEffect(() => {
    const fetchGenres = async () => {
      setLoadingGenres(true);
      setErrorGenres(null);

      try {
        const url = `https://api.kinopoisk.dev/v1.4/movie?page=1&limit=200&type=movie`;

        const response = await fetch(url, {
          headers: {
            "X-API-KEY": API_TOKEN,
          },
        });

        if (!response.ok) {
          throw new Error(`Ошибка при получении фильмов: ${response.status}`);
        }

        const data = await response.json();

        const genresSet = new Set();

        data.docs.forEach((movie) => {
          movie.genres?.forEach((genreObj) => {
            genresSet.add(genreObj.name);
          });
        });

        setAvailableGenres(Array.from(genresSet));
      } catch (err) {
        setErrorGenres(err.message || "Ошибка при загрузке жанров");
      } finally {
        setLoadingGenres(false);
      }
    };

    fetchGenres();
  }, []);

  return {
    availableGenres,
    loadingGenres,
    errorGenres,
  };
};

export default useGenresFilter;
