import PropTypes from "prop-types";
import s from "./Reviews.module.scss";

function Reviews({ movie }) {
  return (
    <>
      {movie.reviews.results.length !== 0 ? (
        <ul className={s.reviewContainer}>
          {movie.reviews.results.map((result) => (
            <li key={result.id} className={s.reviewItem}>
              <p className={s.info}>
                <span className={s.infoSubtitle}>Author:</span>
                {result.author}
              </p>
              <p className={s.info}>{result.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={s.info}>no information</p>
      )}
    </>
  );
}

Reviews.defaultProps = {
  author: null,
  content: null,
};

Reviews.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string,
      content: PropTypes.string,
    })
  ),
};

export default Reviews;
