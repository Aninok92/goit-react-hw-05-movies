import React, { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import * as movieKeyWordApi from "../../services/movies-api";
import SearchForm from "../../components/SearchForm/SearchForm";

function MoviesPage() {
  const { url } = useRouteMatch();
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!query) {
      return;
    }

    movieKeyWordApi
      .fetchMovieByKeyWord(query)
      .then((results) => setMovies(results));
  }, [query]);

  console.log(query);

  return (
    <>
      <SearchForm onSubmit={setQuery}></SearchForm>

      {movies && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`${url}/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default MoviesPage;
