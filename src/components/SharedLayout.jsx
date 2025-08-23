import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Box, Flex, Heading, Spacer, Link } from "@chakra-ui/react";

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
          <Heading size="md">
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
              _hover={{ textDecoration: "none", color: "teal.300" }}
              _activeLink={{ color: "teal.400", fontWeight: "bold" }}
              end
            >
              Home
            </Link>
            <Link
              as={NavLink}
              key="movies"
              to="/movies"
              _hover={{ textDecoration: "none", color: "teal.300" }}
              _activeLink={{ color: "teal.400", fontWeight: "bold" }}
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
    </>
  );
}
