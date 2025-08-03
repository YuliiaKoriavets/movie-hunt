import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { getSearchingMovies } from "../services/tmdbApi";
import { toast } from "react-toastify";
import SearchBox from "../components/SearchBox";
import MoviesList from "../components/MoviesList";

export default function SearchPage() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTrigger, setSearchTrigger] = useState(0);
  const query = searchParams.get("query")?.trim() ?? "";
  const location = useLocation();

  useEffect(() => {
    if (query === "") {
      return;
    }
    const fetchSearchingMovies = async () => {
      try {
        const response = await getSearchingMovies(query);
        const results = response.data.results;
        if (results.length === 0) {
          toast.dismiss();
          toast.error(
            "Sorry, there are no movies matching your search query. Please try again."
          );
        }
        setMovies(results);
      } catch (error) {
        console.error("Error fetching searching movies:", error);
        toast.dismiss();
        toast.error("Something went wrong. Please try again later.");
      }
    };
    fetchSearchingMovies();
  }, [query, searchTrigger]);

  const handleSubmitForm = (value) => {
    const trimmedValue = value.trim();
    setSearchParams(trimmedValue ? { query: trimmedValue } : {});
    setMovies([]);
    setSearchTrigger((prev) => prev + 1);
  };

  return (
    <section>
      <SearchBox onSubmit={handleSubmitForm} defaultValue={query} />
      {query &&
        (movies.length > 0 ? (
          <MoviesList movies={movies} state={{ from: location }} />
        ) : (
          <p>No movies found for "{query}"</p>
        ))}
    </section>
  );
}
