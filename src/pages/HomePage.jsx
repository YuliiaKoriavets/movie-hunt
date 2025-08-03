import { useState, useEffect } from "react";
import { getTrendingMovies } from "../services/tmdbApi";
import MovieCard from "../components/MovieCard";

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTrendingMovies();
        setTrendingMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section>
      <h2>Trending today</h2>
      <ul>
        {trendingMovies &&
          trendingMovies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
      </ul>
    </section>
  );
}
