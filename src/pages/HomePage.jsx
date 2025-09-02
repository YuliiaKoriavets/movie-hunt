import { useState, useEffect } from "react";
import { getTrendingMovies } from "../services/tmdbApi";
import { SimpleGrid, Heading, Box, Text } from "@chakra-ui/react";
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
      <Box
        bg="gray.900"
        color="white"
        p={10}
        textAlign="center"
        borderRadius="xl"
        mb={16}
      >
        <Heading  size="2xl" mb={4}>Welcome to MovieHunt</Heading>
        <Text fontSize="lg" mb={2}>
          Discover trending movies today and explore detailed information about
          thousands of films.
        </Text>
        <Text fontSize="lg" mb={2}>
          Find movie ratings, budget, production countries, cast, and full
          overviews.
        </Text>
        <Text fontSize="lg">
          Use our search to quickly find any movie and get all the details you
          need!
        </Text>
      </Box>
      <Heading
        as="h2"
        size="xl"
        mb={6}
        color="white"
        textShadow="0 2px 6px rgba(0,0,0,0.8)"
      >
        Trending Today
      </Heading>

      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
        spacing={8}
        bg="gray.900"
        p={4}
        borderRadius="xl"
      >
        {trendingMovies?.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
