import {
  Box,
  Flex,
  Image,
  Heading,
  Text,
  VStack,
  Badge,
  Link as ChakraLink,
} from "@chakra-ui/react";
import image from "../utilities/img/image.png";
import { Link, Outlet } from "react-router-dom";

export default function MovieDetails({ movie, subLocation }) {
  const {
    title,
    release_date,
    vote_average,
    vote_count,
    budget,
    overview,
    genres,
    poster_path,
  } = movie;

  const getGenresString = (genres) => {
    const genresArr = [];
    genres.map((genre) => genresArr.push(genre.name));
    return genresArr.join(" ");
  };

  const releaseYear = release_date.slice(0, 4);
  const userScore = Math.round(vote_average * 10);
  const poster = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <Box color="white">
      <Flex direction={{ base: "column", md: "row" }} gap={10} mb={10}>
        <Box flexShrink={0}>
          <Image
            src={poster_path ? poster : image}
            alt={title}
            borderRadius="xl"
            boxShadow="lg"
            w={{ base: "100%", md: "300px" }}
          />
        </Box>

        <VStack align="start" spacing={4} flex={1}>
          <Heading size="lg">
            {title} ({releaseYear})
          </Heading>
          <Text fontSize="lg" color="teal.300" fontWeight="bold">
            User score: {userScore}%
          </Text>
          <Text>Votes: {vote_count.toLocaleString()}</Text>
          {budget > 0 && <Text>Budget: ${budget.toLocaleString()}</Text>}

          <Box h="1px" w="100%" bg="gray.600" my={4} />

          <Box>
            <Heading size="md" mb={2}>
              Genres
            </Heading>
            <Text color="gray.300" fontStyle="italic">
              {getGenresString(genres)}
            </Text>
            <Flex gap={2} wrap="wrap" mt={2}>
              {genres.map((genre) => (
                <Badge
                  key={genre.id}
                  colorScheme="teal"
                  px={2}
                  py={1}
                  borderRadius="md"
                >
                  {genre.name}
                </Badge>
              ))}
            </Flex>
          </Box>

          <Box>
            <Heading size="md" mb={2}>
              Overview
            </Heading>
            <Text color="gray.300">{overview}</Text>
          </Box>

          <Box h="1px" w="100%" bg="gray.600" my={4} />

          <Box>
            <Heading size="md" mb={2}>
              Additional Information
            </Heading>
            <Flex gap={4}>
              <ChakraLink
                as={Link}
                to="cast"
                state={{ from: subLocation }}
                color="teal.300"
                px={6}
                _hover={{ textDecoration: "underline", color: "teal.400" }}
              >
                Cast
              </ChakraLink>
              <ChakraLink
                as={Link}
                to="reviews"
                state={{ from: subLocation }}
                color="teal.300"
                px={6}
                _hover={{ textDecoration: "underline", color: "teal.400" }}
              >
                Reviews
              </ChakraLink>
            </Flex>
          </Box>
        </VStack>
      </Flex>

      <Box mt={16} mb={10}>
        <Outlet />
      </Box>
    </Box>
  );
}
