import React, { useState, useEffect } from "react";
import { useParams, Route, NavLink, Switch } from "react-router-dom";
import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";
import Loader from "../../components/Loader/Loader";
import * as movieApi from "../../services/movies-api";
import s from "./MovieDetailsPage.module.scss";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState("");
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    movieApi
      .fetchMovieById(movieId)
      .then((results) => {
        setMovie(results);
        setStatus(Status.RESOLVED);
      })
      .catch((error) => {
        setStatus(Status.REJECTED);
        console.log(error);
      });
  }, [movieId]);

  console.log(movie);

  return (
    <>
      {status === Status.IDLE && <></>}
      {status === Status.PENDING && <Loader />}
      <div className={s.card}>
        <img
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt={movie.title}
        />
        <div className={s.content}>
          <h2 className={s.title}>{movie.title}</h2>
          <p className={s.info}>
            <span className={s.infoSubtitle}>Release: </span>
            {movie.release_date}
          </p>
          <p className={s.info}>
            <span className={s.infoSubtitle}>User Score:</span>
            {movie.vote_average}
          </p>
          <p className={s.info}>
            <span className={s.infoSubtitle}>Overview:</span> {movie.overview}
          </p>
          <ul className={s.infoList}>
            <span className={s.infoSubtitle}>Genres:</span>
            {movie &&
              movie.genres.map((genre) => (
                <li key={genre.id} className={s.infoItem}>
                  {genre.name}
                </li>
              ))}
          </ul>
          <hr />
          <NavLink to={"/movies/:movieId/cast"}>
            <h3>Cast</h3>
          </NavLink>
          <NavLink to={"/movies/:movieId/reviews"}>
            <h3>Reviews</h3>
          </NavLink>
          <Switch>
            <Route path="/movies/:movieId/cast">
              <Cast movie={movie} />
            </Route>
            <Route path="/movies/:movieId/reviews">
              <Reviews movie={movie} />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
}

export default MovieDetailsPage;
