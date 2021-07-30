import s from "./Cast.module.scss";

function Cast({ movie }) {
  return (
    <ul className={s.castGallery}>
      {movie.credits.cast.map((cast) => (
        <li key={cast.id} className={s.castGalleryItem}>
          <img
            src={`https://image.tmdb.org/t/p/w200/${cast.profile_path}`}
            alt={cast.name}
          />
          <p className={s.info}>
            <span className={s.infoSubtitle}>Name:</span>
            {cast.name}
          </p>
          <p className={s.info}>
            <span className={s.infoSubtitle}>Character:</span>
            {cast.character}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default Cast;
