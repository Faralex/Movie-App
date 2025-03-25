import { Routes, Route } from "react-router-dom";
import { MoviePage } from "../../pages/MoviePage";
import MovieList from "../../widgets/MovieListPage/ui/MovieList/MovieList";
import React from "react";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MovieList />}></Route>
      <Route path="/movie/:id" element={<MoviePage />}></Route>
    </Routes>
  );
};

export default AppRouter;
