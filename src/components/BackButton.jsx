import { Box, Button, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function BackButton({ to, children }) {
  return (
    <Box mb={6} display="flex" justifyContent="flex-start">
      <Button
        as={Link}
        to={to}
        leftIcon={<Icon as={FaArrowLeft} color="white" />}
        color="white"
        borderColor="white"
        variant="outline"
        size="md"
        px={6}
        mb={6}
        _hover={{ bg: "whiteAlpha.200" }}
        justifyContent="flex-start"
        width="fit-content"
      >
        {children}
      </Button>
    </Box>
  );
}
