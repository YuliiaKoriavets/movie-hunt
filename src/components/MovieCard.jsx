import { Link, useLocation } from "react-router-dom";

export default function MovieCard({ id, title, poster_path, vote_average }) {
  const location = useLocation();

  return (
    <li key={id}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        {poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
            alt={title}
            style={{ width: "100%", borderRadius: "8px" }}
          />
        ) : (
          <div>
            <p>No image</p>
          </div>
        )}
        <p>
          {title}
          <span>⭐ {vote_average ? vote_average.toFixed(1) : "N/A"}</span>
        </p>
      </Link>
    </li>
  );
}
