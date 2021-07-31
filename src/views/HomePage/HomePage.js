import React, { useState, useEffect } from "react";
import MoviesGallery from "../../components/MoviesGallery/MoviesGallery";
import * as moviesApi from "../../services/movies-api";
import Loader from "../../components/Loader/Loader";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    setStatus(Status.PENDING);
    moviesApi
      .fetchMovies()
      .then((results) => {
        setMovies(results);
        setStatus(Status.RESOLVED);
      })
      .catch((error) => {
        setStatus(Status.REJECTED);
        console.log(error);
      });
  }, []);

  if (status === Status.IDLE) {
    return <></>;
  }
  if (status === Status.PENDING) {
    return <Loader />;
  }
  if (status === Status.RESOLVED) {
    return <MoviesGallery movies={movies}></MoviesGallery>;
  }
  if (status === Status.REJECTED) {
    return <p>something wrong</p>;
  }
}

export default HomePage;
