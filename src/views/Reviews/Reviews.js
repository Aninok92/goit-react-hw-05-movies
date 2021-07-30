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

export default Reviews;
