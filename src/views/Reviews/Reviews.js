import s from "./Reviews.module.scss";

function Reviews({ movie }) {
  return (
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
  );
}

export default Reviews;
