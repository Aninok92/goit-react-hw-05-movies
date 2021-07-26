import s from "./Cast.module.scss";

function Cast({ movie }) {
  console.log(movie.reviews.results);
  return (
    <ul className={s.castGallery}>
      {movie.credits.cast.map((cast) => (
        <li key={cast.id} className={s.castGalleryItem}>
          <img
            src={`https://image.tmdb.org/t/p/w200/${cast.profile_path}`}
            alt={cast.name}
          />
          <p>Name:{cast.name}</p>
          <p>Character: {cast.character}</p>
        </li>
      ))}
    </ul>
  );
}

export default Cast;
