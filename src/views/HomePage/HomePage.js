import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import MoviesGallery from "../../components/MoviesGallery/MoviesGallery";
import * as moviesApi from "../../services/movies-api";
// import s from "./HomePage.module.scss";

function HomePage() {
  const match = useRouteMatch();
  const [movies, setMovies] = useState([]);
  console.log(match);

  useEffect(() => {
    moviesApi.fetchMovies().then((results) => setMovies(results));
  }, []);
  console.log(movies);
  return <>{movies && <MoviesGallery movies={movies}></MoviesGallery>}</>;
}

export default HomePage;
