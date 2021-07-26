import React, { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import * as moviesApi from "../../services/movies-api";
import s from "./HomePage.module.scss";

function HomePage() {
  const match = useRouteMatch();
  const [movies, setMovies] = useState([]);
  console.log(match);

  useEffect(() => {
    moviesApi.fetchMovies().then((results) => setMovies(results));
  }, []);
  console.log(movies);
  return (
    <>
      {movies && (
        <ul className={s.moviesGallery}>
          {movies.map((movie) => (
            <li key={movie.id} className={s.movieGalleryItem}>
              <Link to={`movies/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`}
                  alt={movie.title}
                />
                <h3>{movie.title ?? "no title"}</h3>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default HomePage;
