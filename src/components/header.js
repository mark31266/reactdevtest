import React from "react";
import { Box, Flex, Heading, Link, Spacer, HStack } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box className="bg-teal-600 text-white p-4 shadow-lg">
      <Flex>
        <Heading size="md">Developer Test</Heading>
        <Spacer />
        <HStack spacing={8}>
          <Link href="#home" color="white">
            Home
          </Link>
          <Link href="#attach_work" color="white">
            Attach Work
          </Link>
          <Link href="#test_questions" color="white">
            Test Questions
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
