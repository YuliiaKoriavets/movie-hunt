import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { getTrendingMovies } from "../services/tmdbApi";

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState();
  const location = useLocation();

  useEffect(() => {
    getTrendingMovies().then((response) =>
      setTrendingMovies(response.data.results)
    );
  }, []);

  return (
    <section>
      <h2>Trending today</h2>
      <ul>
        {trendingMovies &&
          trendingMovies.map(({ id, poster_path, title }) => (
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
                <p>{title}</p>
              </Link>
            </li>
          ))}
      </ul>
    </section>
  );
}
