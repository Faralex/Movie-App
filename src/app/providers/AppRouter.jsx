import { Routes, Route } from "react-router-dom";
import { MoviesPage } from "../../pages/MoviesPage";
import MoviePage from "../../widgets/MovieDetailsPage/ui/MoviePage/MoviePage";
import React from "react";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MoviePage />}></Route>
      <Route path="/movie/:id" element={<MoviesPage />}></Route>
    </Routes>
  );
};

export default AppRouter;
