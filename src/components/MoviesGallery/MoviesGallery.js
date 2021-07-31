import { NavLink } from "react-router-dom";
import defaultImage from "../../images/no-image.png";
import s from "./MoviesGallery.module.scss";

function MoviesGallery({ movies }) {
  console.log(movies);
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
              src={
                movie.backdrop_path
                  ? `https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`
                  : defaultImage
              }
              alt={movie.title}
              className={s.img}
            />
            <h3>{movie.title ?? "no title"}</h3>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default MoviesGallery;
