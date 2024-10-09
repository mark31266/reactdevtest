import React from "react";
import { Box, Heading, Text, Image } from "@chakra-ui/react";

const Problem = ({ title, description, image }) => {
  return (
    <Box className="bg-white shadow-md p-6 rounded-lg mb-4">
      <Heading size="md">{title}</Heading>
      <Text mt={2}>{description}</Text>
      <Image src={image} />
    </Box>
  );
};

export default Problem;
