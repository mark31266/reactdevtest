import React from "react";
import Problem from "./problem";
import { Box, Heading } from "@chakra-ui/react";

const problemsData = [
  {
    title: "Problem 1: Hamburger Menu",
    description: "Create a Hamburger Menu for Mobile",
    image: "",
  },
  {
    title: "Problem 2: UI",
    description: "Improve the user interface of this page as best as you can.",
    image: "",
  },
  {
    title: "Problem 3: Scaling",
    description:
      "Make use of different techniques to make the structure of this page scalable i.e using flexboxes and grids",
    image: "",
  },
  {
    title: "Problem 4: Git",
    description: "Create your own repository with Git and commit the project.",
    image: "",
  },
];

const ProblemsList = () => {
  return (
    <Box id="attach_work" className="p-8 bg-gray-100">
      <Heading mb={4}>Attach Your Work</Heading>
      {problemsData.map((problem, index, image) => (
        <Problem
          key={index}
          title={problem.title}
          description={problem.description}
          image={problem.image}
        />
      ))}
    </Box>
  );
};

export default ProblemsList;
