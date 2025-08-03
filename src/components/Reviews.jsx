import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../services/tmdbApi";

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const response = await getMovieReviews(Number(movieId));
        setReviews(response.data.results);
      } catch (error) {
        console.error("Error fetching movie reviews:", error);
      }
    };
    fetchMovieReviews();
  }, [movieId]);

  return (
    <section>
      {reviews && reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h4>A review by {author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </section>
  );
}
