import { NavLink } from "react-router-dom";
import s from "./MoviesGallery.module.scss";

function MoviesGallery({ movies }) {
  return (
    <ul className={s.moviesGallery}>
      {movies.map((movie) => (
        <li key={movie.id} className={s.movieGalleryItem}>
          <NavLink
            to={`movies/${movie.id}`}
            className={s.link}
            activeClassName={s.activeLink}
          >
            <img
              src={`https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`}
              alt={movie.title}
            />
            <h3>{movie.title ?? "no title"}</h3>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default MoviesGallery;
