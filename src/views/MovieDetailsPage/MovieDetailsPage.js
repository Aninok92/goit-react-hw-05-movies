import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as movieApi from "../../services/movies-api";
import s from "./MovieDetailsPage.module.scss";

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState("");

  useEffect(() => {
    movieApi.fetchMovieById(movieId).then((results) => setMovie(results));
  }, [movieId]);

  console.log(movie);
  return (
    <>
      {movie && (
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
              {movie.genres.map((genre) => (
                <li key={genre.id} className={s.infoItem}>
                  {genre.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default MovieDetailsPage;
