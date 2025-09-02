import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getSearchingMovies } from "../services/tmdbApi";
import { toast } from "react-toastify";
import SearchBox from "../components/SearchBox";
import { SimpleGrid, Box, Heading, Text } from "@chakra-ui/react";
import MovieCard from "../components/MovieCard";

export default function SearchPage() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query")?.trim() ?? "";

  useEffect(() => {
    if (!query) return;

    const fetchMovies = async () => {
      try {
        const response = await getSearchingMovies(query);
        const results = response.data.results || [];
        if (results.length === 0) {
          toast.dismiss();
          toast.error(
            `Sorry, no movies found for "${query}". Please try again.`
          );
        }
        setMovies(results);
      } catch (error) {
        console.error("Error fetching movies:", error);
        toast.dismiss();
        toast.error("Something went wrong. Please try again later.");
      }
    };

    fetchMovies();
  }, [query]);

  const handleSubmitForm = (value) => {
    const trimmedValue = value.trim();
    setSearchParams(trimmedValue ? { query: trimmedValue } : {});
    setMovies([]);
  };

  return (
    <Box bg="black" minH="100vh" px={{ base: 4, md: 10 }} py={10}>
      <Box
        bg="gray.900"
        color="white"
        p={10}
        textAlign="center"
        borderRadius="xl"
        mb={16}
      >
        <Heading size="2xl" mb={4}>
          Movie Search
        </Heading>
        <Text fontSize="lg" mb={2}>
          Discover thousands of movies from all genres and decades.
        </Text>
        <Text fontSize="lg" mb={2}>
          Use the search below to quickly find your favorite films, explore
          details, check ratings, and read reviews.
        </Text>
        <Text fontSize="lg">Enter a movie title and start your journey!</Text>

        <Box mt={6}>
          <SearchBox onSubmit={handleSubmitForm} defaultValue={query} />
        </Box>
      </Box>

      {query && movies.length > 0 && (
        <>
          <Heading
            as="h2"
            size="xl"
            mb={6}
            color="white"
            textShadow="0 2px 6px rgba(0,0,0,0.8)"
          >
            Search results for "{query}"
          </Heading>

          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
            spacing={8}
            bg="gray.900"
            p={4}
            borderRadius="xl"
          >
            {movies.map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </SimpleGrid>
        </>
      )}

      {query && movies.length === 0 && (
        <Text color="white" mt={4} textAlign="center" fontSize="lg">
          No movies found for "{query}".
        </Text>
      )}
    </Box>
  );
}
