import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Box, Image, Text, Badge } from "@chakra-ui/react";
import image from "../utilities/img/image.png";
export default function MovieCard({ id, title, poster_path, vote_average }) {
  const location = useLocation();
  return (
    <Link to={`/movies/${id}`} state={{ from: location }}>
      <Box
        position="relative"
        borderRadius="xl"
        overflow="hidden"
        boxShadow="lg"
        _hover={{ transform: "scale(1.05)", boxShadow: "2xl" }}
        transition="all 0.3s"
        bg="black"
        w="100%"
        h="100%"
        p={2}
      >
        <Image
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : image
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
    </Link>
  );
}
