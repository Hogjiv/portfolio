import React from "react";
import {
  Container,
  Box,
  Heading,
  Text,
  VStack,
  Center,
} from "@chakra-ui/react";

function PageTemplate({ heading, description, children }) {
  return (
    <Center>
      <Container 
        maxW="100%"
        m={3}
        minH="calc(100vh - 66px)"
        maxH="calc(100vh - 66px)"
        display="flex"
        flexDirection="column"
        alignItems="center"
        overflow="auto"
      >
        <Heading as="h1" fontSize="3xl" textStyle="h1" mb={3} color="violet">
          {heading}
        </Heading>
        <Box w="70%" color="white" textAlign={"center"}>
          <Text textTransform="uppercase" pb={2}>
            {description}
          </Text>
        </Box>

        <VStack
        color={"white"}
          spacing={4}
          w="100%"
          align="center"
          mb={4}
       
        >
          {children}
        </VStack>
      </Container>
    </Center>
  );
}

export default PageTemplate;
