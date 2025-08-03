import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../services/tmdbApi";
import image from "../utilities/img/image.png";

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        const response = await getMovieCredits(Number(movieId));
        setCast(response.data.cast);
      } catch (error) {
        console.error("Error fetching movie credits:", error);
      }
    };
    fetchMovieCredits();
  }, [movieId]);

  if (!cast) {
    return [];
  }

  return (
    <ul>
      {cast.map(({ id, profile_path, name, character }) => (
        <li key={id}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500${profile_path}`
                : image
            }
            alt={name}
            width="100px"
          />
          <p>{name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
}
