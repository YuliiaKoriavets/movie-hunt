import { Link, useLocation } from "react-router-dom";
import { Box, Image, Text, Badge, Flex } from "@chakra-ui/react";

export default function MovieCard({ id, title, poster_path, vote_average }) {
  const location = useLocation();

  return (
    <Box
      as={Link}
      to={`/movies/${id}`}
      state={{ from: location }}
      position="relative"
      borderRadius="xl"
      overflow="hidden"
      boxShadow="lg"
      _hover={{ transform: "scale(1.05)", boxShadow: "2xl" }}
      transition="all 0.3s"
      bg="black"
    >
      <Image
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : "https://via.placeholder.com/500x750?text=No+Image"
        }
        alt={title}
        w="100%"
        aspectRatio={2 / 3}
        objectFit="cover"
      />

      <Box
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        h="30%"
        bgGradient="linear(to-t, blackAlpha.800, transparent)"
        display="flex"
        alignItems="flex-end"
        p={3}
      >
        <Text
          fontWeight="bold"
          fontSize="lg"
          color="white"
          noOfLines={1}
          textShadow="0 2px 4px rgba(0,0,0,0.8)"
        >
          {title}
        </Text>
      </Box>
      <Badge
        position="absolute"
        top="3"
        right="3"
        bg="red.500"
        color="white"
        fontSize="0.9em"
        borderRadius="md"
        px={2}
        py={1}
        boxShadow="md"
      >
        ⭐ {vote_average ? vote_average.toFixed(1) : "N/A"}
      </Badge>
    </Box>
  );
}
