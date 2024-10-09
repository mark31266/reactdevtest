import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/header";
import Banner from "./components/banner";
import ProblemsList from "./components/problemlist";
import TestQuestions from "./components/testquestions";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Header />
        <Banner />
        <ProblemsList />
        <TestQuestions />
      </div>
    </ChakraProvider>
  );
}

export default App;
