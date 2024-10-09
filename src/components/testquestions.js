import React, { useState } from "react";
import {
  Box,
  Heading,
  Radio,
  RadioGroup,
  Stack,
  Button,
  useToast,
  Divider,
} from "@chakra-ui/react";
import FileSaver from "file-saver";

const questions = [
  {
    id: 1,
    category: "Shopify",
    question:
      "Which of the following is a correct approach to create a custom Shopify theme?",
    options: [
      "Modifying an existing Shopify theme",
      "Starting from scratch using Liquid, HTML, CSS, and Shopify’s CLI",
      "Using only HTML and CSS files without Liquid integration",
      "Integrating Shopify with a WordPress theme",
    ],
  },
  {
    id: 2,
    category: "Shopify",
    question:
      "How would you optimize Shopify performance for a store with thousands of products?",
    options: [
      "Increase the image sizes for better quality",
      "Reduce the number of Liquid loops and use pagination",
      "Add more third-party apps to handle the load",
      "Disable CDN to prevent cache delays",
    ],
  },
  {
    id: 3,
    category: "Shopify",
    question: "What is Shopify Polaris?",
    options: [
      "A third-party analytics tool for Shopify",
      "A component library for Shopify admin and apps",
      "An order management system",
      "A Shopify SEO plugin",
    ],
  },

  {
    id: 4,
    category: "React",
    question:
      "How would you optimize a large React application to reduce rendering time?",
    options: [
      "Use higher-order components (HOCs) for all components",
      "Implement React.memo and useCallback to avoid unnecessary re-renders",
      "Use context API for state management instead of Redux",
      "Avoid using state in components",
    ],
  },
  {
    id: 5,
    category: "React",
    question:
      "Which React hook would you use to fetch data only when a certain condition is met, and why?",
    options: [
      "useState, because it tracks state changes",
      "useEffect with conditional dependencies, to control side effects",
      "useReducer, to update complex state logic",
      "useContext, to access global state",
    ],
  },

  {
    id: 6,
    category: "Database",
    question:
      "Which of the following SQL queries is used to join two tables based on a common column?",
    options: [
      "SELECT * FROM table1 CROSS JOIN table2",
      "SELECT * FROM table1 JOIN table2 ON table1.id = table2.id",
      "SELECT * FROM table1 UNION SELECT * FROM table2",
      "SELECT * FROM table1 WHERE table1.id = table2.id",
    ],
  },
  {
    id: 7,
    category: "Database",
    question:
      "How would you design a database schema to optimize read performance in a reporting system?",
    options: [
      "Create a star schema with denormalized tables",
      "Use highly normalized tables with foreign keys",
      "Implement many-to-many relationships for all tables",
      "Avoid indexing to reduce query planning time",
    ],
  },

  {
    id: 8,
    category: "MongoDB",
    question:
      "Which MongoDB index type would you use to ensure uniqueness of values across multiple fields?",
    options: [
      "Single-field index",
      "Compound index",
      "Text index",
      "Geospatial index",
    ],
  },
  {
    id: 9,
    category: "MongoDB",
    question:
      "How would you structure a MongoDB schema for a multi-tenant application?",
    options: [
      "Use separate databases for each tenant",
      "Use a shared database with tenant identifiers in each document",
      "Combine both approaches depending on the data sensitivity",
      "All of the above, based on use case requirements",
    ],
  },

  {
    id: 10,
    category: "Website Maintenance",
    question: "Which method would you use to automate daily website backups?",
    options: [
      "Create manual database dumps",
      "Use cron jobs and shell scripts to automate backups",
      "Install a plugin to download backups daily",
      "Rely on the hosting provider’s automatic backups only",
    ],
  },
  {
    id: 11,
    category: "Website Maintenance",
    question:
      "What is the best approach to test website updates without impacting live users?",
    options: [
      "Deploy directly to production during low-traffic hours",
      "Use a staging environment to test changes before deploying",
      "Perform A/B testing on a small user base",
      "Take the website offline for a short period",
    ],
  },

  {
    id: 12,
    category: "App Development",
    question:
      "Which React Native module is recommended for managing application state in large apps?",
    options: ["Redux", "Context API", "Flux", "None, use local state only"],
  },
  {
    id: 13,
    category: "App Development",
    question: "What is the purpose of code-splitting in React applications?",
    options: [
      "To reduce the number of state updates",
      "To split large components into smaller reusable units",
      "To reduce the bundle size by loading components as needed",
      "To prevent hooks from being used in multiple components",
    ],
  },

  {
    id: 14,
    category: "Loyalty Programs",
    question:
      "Which of the following strategies would best increase user engagement in a loyalty program?",
    options: [
      "Offer rewards only for purchases",
      "Include personalized offers and referral bonuses",
      "Limit rewards to exclusive users",
      "Run one-time promotions only",
    ],
  },
  {
    id: 15,
    category: "Loyalty Programs",
    question:
      "How can data from a loyalty program be used to improve marketing strategies?",
    options: [
      "Analyze spending patterns for customer segmentation",
      "Determine low-performing products",
      "Track inventory turnover rates",
      "Identify potential supply chain issues",
    ],
  },

  {
    id: 16,
    category: "Gift Registry",
    question:
      "Which of the following is a key benefit of implementing a gift registry feature on an e-commerce platform?",
    options: [
      "Increases average order value through shared wish lists",
      "Simplifies product management for vendors",
      "Reduces shipping costs for customers",
      "Allows vendors to track inventory better",
    ],
  },
  {
    id: 17,
    category: "Gift Registry",
    question:
      "Which of the following would help promote a gift registry to potential users?",
    options: [
      "Implementing social media sharing options",
      "Offering discounts for registry purchases",
      "Providing customization options for registry pages",
      "All of the above",
    ],
  },
];

const TestQuestions = () => {
  const [responses, setResponses] = useState({});
  const toast = useToast();

  // Handle save results to a text file
  const handleSave = () => {
    let results = "Developer Test Results\n\n";
    const groupedQuestions = groupByCategory(questions);

    // Format results by category
    Object.keys(groupedQuestions).forEach((category) => {
      results += `### ${category} Questions ###\n\n`;
      groupedQuestions[category].forEach((q, index) => {
        results += `Question ${index + 1}: ${q.question}\n`;
        results += `Your Answer: ${responses[q.id] || "No Answer"}\n\n`;
      });
    });

    // Create and save the results file
    const blob = new Blob([results], { type: "text/plain;charset=utf-8" });
    FileSaver.saveAs(blob, "test_results.txt");

    toast({
      title: "Results Saved",
      description: "Your test results have been saved to test_results.txt",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const groupByCategory = (questions) => {
    return questions.reduce((acc, curr) => {
      const category = curr.category;
      if (!acc[category]) acc[category] = [];
      acc[category].push(curr);
      return acc;
    }, {});
  };

  const groupedQuestions = groupByCategory(questions);

  return (
    <Box
      id={"test_questions"}
      className="p-6 bg-white rounded-lg shadow-md mt-6"
    >
      <Heading mb={4}>Comprehensive Developer Test</Heading>
      {Object.keys(groupedQuestions).map((category, catIndex) => (
        <Box key={catIndex} mb={10}>
          <Heading size="md" color="teal.600" mb={4}>
            {category} Questions
          </Heading>
          {groupedQuestions[category].map((q) => (
            <Box key={q.id} mb={6}>
              <Heading size="sm" mb={2}>
                {q.question}
              </Heading>
              <RadioGroup
                onChange={(value) =>
                  setResponses({ ...responses, [q.id]: value })
                }
                value={responses[q.id] || ""}
              >
                <Stack direction="column">
                  {q.options.map((option, index) => (
                    <Radio key={index} value={option}>
                      {option}
                    </Radio>
                  ))}
                </Stack>
              </RadioGroup>
            </Box>
          ))}
          <Divider />
        </Box>
      ))}
      <Button colorScheme="teal" onClick={handleSave}>
        Save Results
      </Button>
    </Box>
  );
};

export default TestQuestions;
