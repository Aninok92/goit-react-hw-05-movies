import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import defaultImage from "../../images/no-image.png";
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

MoviesGallery.defaultProps = {
  title: "No title",
  backdrop_path: null,
};

MoviesGallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      backdrop_path: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};

export default MoviesGallery;
