import React, { useState, useEffect } from "react";
import MoviesGallery from "../../components/MoviesGallery/MoviesGallery";
import * as movieKeyWordApi from "../../services/movies-api";
import SearchForm from "../../components/SearchForm/SearchForm";
import Loader from "../../components/Loader/Loader";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

function MoviesPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    if (!query) {
      return;
    }

    setStatus(Status.PENDING);

    movieKeyWordApi
      .fetchMovieByKeyWord(query)
      .then((results) => {
        setMovies(results);
        setStatus(Status.RESOLVED);
      })
      .catch((error) => {
        setStatus(Status.REJECTED);
        console.log(error);
      });
  }, [query]);

  return (
    <>
      <SearchForm onSubmit={setQuery}></SearchForm>
      {status === Status.IDLE && <></>}
      {status === Status.PENDING && <Loader />}
      {status === Status.RESOLVED && (
        <MoviesGallery movies={movies}></MoviesGallery>
      )}
      {status === Status.REJECTED && <p>something wrong</p>}
    </>
  );
}

export default MoviesPage;
