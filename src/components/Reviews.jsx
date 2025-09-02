import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../services/tmdbApi";
import { Box, Text, Button, VStack } from "@chakra-ui/react";

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

  if (!reviews || reviews.length === 0) {
    return <Text color="white">We don't have any reviews for this movie.</Text>;
  }

  return (
    <VStack spacing={6} align="stretch" mt={6}>
      {reviews.map(({ id, author, content }) => (
        <ReviewCard key={id} author={author} content={content} />
      ))}
    </VStack>
  );
}

function ReviewCard({ author, content }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const previewLength = 500; 

  const toggleExpand = () => setIsExpanded(!isExpanded);

  const displayText = isExpanded ? content : content.slice(0, previewLength);

  return (
    <Box
      bg="gray.800"
      p={4}
      borderRadius="lg"
      boxShadow="md"
      color="white"
    >
      <Text fontWeight="bold" mb={2}>
        Review by {author}
      </Text>
      <Text mb={2}>
        {displayText}
        {!isExpanded && content.length > previewLength ? "..." : ""}
      </Text>
      {content.length > previewLength && (
        <Button
          size="sm"
          variant="outline"
          colorScheme="teal"
          color="teal.300"
          px={6}
          _hover={{ textDecoration: "underline", color: "teal.400" }}
          onClick={toggleExpand}
        >
          {isExpanded ? "Read less" : "Read more"}
        </Button>
      )}
    </Box>
  );
}