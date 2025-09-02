import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { getMovieById } from "../services/tmdbApi";
import BackButton from "../components/BackButton";
import MovieDetails from "../components/MovieDetails";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backButtonHref = useRef(location.state?.from ?? "/");

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await getMovieById(Number(movieId));
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie by id:", error);
      }
    };
    fetchMovie();
  }, [movieId]);

  if (!movie) {
    return null;
  }

  return (
    <section>
      <BackButton to={backButtonHref.current}>Go back</BackButton>
      {movie && <MovieDetails movie={movie} />}
    </section>
  );
}
