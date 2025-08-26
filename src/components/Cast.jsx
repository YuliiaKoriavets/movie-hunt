import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../services/tmdbApi";
import image from "../utilities/img/image.png";
import { Box, Image, Text, SimpleGrid } from "@chakra-ui/react";

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

  if (!cast?.length) {
    return <Text color="white">No cast information available.</Text>;
  }

  return (
    <SimpleGrid columns={[2, 3, 4, 6]} spacing={6} mt={6}>
      {cast.map(({ id, profile_path, name, character }) => (
        <Box
          key={id}
          borderRadius="xl"
          overflow="hidden"
          boxShadow="lg"
          _hover={{ transform: "scale(1.05)", boxShadow: "2xl" }}
          transition="all 0.3s"
          bg="gray.800"
          color="white"
          textAlign="center"
        >
          <Image
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w300${profile_path}`
                : image
            }
            alt={name}
            objectFit="cover"
            w="100%"
            h="250px"
          />
          <Box p={2}>
            <Text fontWeight="bold" noOfLines={1}>
              {name}
            </Text>
            <Text fontSize="sm" color="gray.300" noOfLines={1}>
              as {character || "—"}
            </Text>
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  );
}

