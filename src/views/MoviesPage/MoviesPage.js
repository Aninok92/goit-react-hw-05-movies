import React, { useState, useEffect } from "react";
import MoviesGallery from "../../components/MoviesGallery/MoviesGallery";
import * as movieKeyWordApi from "../../services/movies-api";
import SearchForm from "../../components/SearchForm/SearchForm";

function MoviesPage() {
  // const { url } = useRouteMatch();
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
      {movies && <MoviesGallery movies={movies}></MoviesGallery>}
    </>
  );
}

export default MoviesPage;
