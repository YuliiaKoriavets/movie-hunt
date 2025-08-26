import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
import {
  Box,
  Flex,
  Heading,
  Spacer,
  Link,
  Link as ChakraLink,
  Text,
  Icon,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

export default function SharedLayout() {
  return (
    <>
      <Box
        as="header"
        w="100%"
        h={{ base: "60px", md: "80px" }}
        bg="gray.800"
        color="white"
        px={{ base: 4, md: 10 }}
        py={2}
        boxShadow="md"
        position="sticky"
        top={0}
        zIndex={1000}
      >
        <Flex align="center" h="100%">
          <Heading
            as="h1"
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            fontWeight="extrabold"
            color="red.500"
            _hover={{ color: "white", transition: "0.3s" }}
          >
            <NavLink to="/" style={{ textDecoration: "none" }}>
              🎬 MovieHunt
            </NavLink>
          </Heading>
          <Spacer />
          <Flex gap={{ base: 3, md: 6 }}>
            <Link
              as={NavLink}
              to="/"
              key="home"
              _hover={{ textDecoration: "none", color: "red.400" }}
              _activeLink={{ color: "red.500", fontWeight: "bold" }}
              end
            >
              Home
            </Link>
            <Link
              as={NavLink}
              key="movies"
              to="/movies"
              _hover={{ textDecoration: "none", color: "red.400" }}
              _activeLink={{ color: "red.500", fontWeight: "bold" }}
            >
              Movies
            </Link>
          </Flex>
        </Flex>
      </Box>

      <Box as="main" bg="black" px={{ base: 4, md: 10 }} py={10} minH="100vh">
        <Suspense fallback={<p style={{ color: "white" }}>Loading page...</p>}>
          <Outlet />
        </Suspense>
      </Box>
      <Box as="footer" bg="gray.900" color="gray.300" py={8}>
        <Flex direction="column" align="center" gap={4}>
          <Text fontSize="lg" textAlign="center">
            Want to know more about the world of cinema?
            <br /> Subscribe and stay connected with us!
          </Text>

          <ChakraLink href="mailto:info@moviehunt.com" color="red.400">
            info@moviehunt.com
          </ChakraLink>

          <Flex gap={6}>
            <ChakraLink href="https://instagram.com" isExternal>
              <Icon as={FaInstagram} w={6} h={6} color="pink.400" />
            </ChakraLink>
            <ChakraLink href="https://twitter.com" isExternal>
              <Icon as={FaTwitter} w={6} h={6} color="blue.400" />
            </ChakraLink>
            <ChakraLink href="https://facebook.com" isExternal>
              <Icon as={FaFacebook} w={6} h={6} color="blue.600" />
            </ChakraLink>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
