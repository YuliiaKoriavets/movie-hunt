import { useState, useEffect } from "react";
import { getTrendingMovies } from "../services/tmdbApi";
import { SimpleGrid, Heading, Box } from "@chakra-ui/react";
import MovieCard from "../components/MovieCard";

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState();

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await getTrendingMovies();
        setTrendingMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <Box bg="black" minH="100vh" px={{ base: 4, md: 10 }} py={10}>
      <Heading
        as="h2"
        size="xl"
        mb={6}
        color="white"
        textShadow="0 2px 6px rgba(0,0,0,0.8)"
      >
        Trending Today
      </Heading>

      <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 5 }} spacing={6}>
        {trendingMovies?.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
