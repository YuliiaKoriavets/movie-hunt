import image from "../utilities/img/image.png";
import { Link, Outlet } from "react-router-dom";

export default function MovieDetails({ movie, subLocation }) {
  const {
    title,
    release_date,
    vote_average,
    vote_count,
    budget,
    overview,
    genres,
    poster_path,
  } = movie;

  const getGenresString = (genres) => {
    const genresArr = [];
    genres.map((genre) => genresArr.push(genre.name));
    return genresArr.join(" ");
  };

  const releaseYear = release_date.slice(0, 4);
  const userScore = Math.round(vote_average * 10);
  const poster = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <>
      <div>
        <img src={poster_path ? poster : image} alt={title} width="300px" />
      </div>

      <div>
        <h2>
          {title} ({releaseYear})
        </h2>
        <p>User score: {userScore}%</p>
        <p>Votes:{vote_count.toLocaleString()}</p>
        {budget > 0 && <p>Budget: ${budget.toLocaleString()}</p>}
        <h4>Genres</h4>
        <p>{getGenresString(genres)}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
      </div>

      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link key="cast" to="cast" state={{ from: subLocation }}>
              Cast
            </Link>
          </li>
          <li>
            <Link key="reviews" to="reviews" state={{ from: subLocation }}>
              Reviews
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
}
