import React from "react";
import { Box, Heading, Text, UnorderedList, ListItem } from "@chakra-ui/react";

const Banner = () => {
  return (
    <Box id="home" className="bg-teal-100 text-teal-900 p-10">
      <Heading>Technical Exam</Heading>
      <Text fontSize="xl" mt={4}>
        Web Developer Test
      </Text>
      <Text mt={2}>
        Find a way to answer and attach screenshots or proof of your work below.
      </Text>
      <UnorderedList mt={4} spacing={2}>
        <ListItem>Create a Hamburger Menu for Mobile</ListItem>
        <ListItem>
          Improve the user interface of this page as best as you can.
        </ListItem>
        <ListItem>
          Make use of different techniques to make the structure of this page
          scalable i.e using flexboxes and grids
        </ListItem>
        <ListItem>Attach your screenshots below.</ListItem>
        <ListItem>
          Create your own repository with Git and commit the project.
        </ListItem>
        <ListItem>Answer the comprehensive test below.</ListItem>
      </UnorderedList>
    </Box>
  );
};

export default Banner;
