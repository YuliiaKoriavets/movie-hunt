import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Input, Button, Flex, Box } from "@chakra-ui/react";
import { debounce } from "lodash";

export default function SearchBox({ onSubmit, defaultValue = "" }) {
  const [inputValue, setInputValue] = useState(defaultValue);

  const debouncedSubmit = debounce((value) => onSubmit(value), 500);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    debouncedSubmit(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    debouncedSubmit.flush();
  };

  useEffect(() => () => debouncedSubmit.cancel(), []);

  return (
    <Box textAlign="center" mb={10}>
      <form onSubmit={handleFormSubmit}>
        <Flex justify="center" gap={3}>
          <Input
            placeholder="Search movies..."
            value={inputValue}
            onChange={handleChange}
            size="lg"
            maxW="400px"
            bg="gray.800"
            color="white"
            borderRadius="md"
            px={4}
            _placeholder={{ color: "gray.400" }}
          />
          <Button
            type="submit"
            px={6}
            _hover={{ textDecoration: "underline", color: "teal.400" }}
            size="lg"
          >
            Search
          </Button>
        </Flex>
      </form>
    </Box>
  );
}

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
};
