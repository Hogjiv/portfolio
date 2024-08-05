import React from "react";
import CardComponent from "../CardComponent.jsx";
import {
  Center,
  Text,
  Heading,
  Container,
  Box,
  HStack,
  VStack,
} from "@chakra-ui/react";


function Skills() {
  return (
    <Center>
      <Container
        maxW="100%" // Занимает всю доступную ширину
        minH="calc(100vh - 66px)"
        p={3}
        bg="green.800"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Heading as="h1" fontSize="3xl" textStyle="h1" mb={4} color="violet">
          Skills
        </Heading>


        <Container bg="green.200" color="white" centerContent maxW="1200px">
          <Text textTransform={"uppercase"}>
            "md" Container There are many benefits to a joint design and
            development system. Not only does it bring benefits to the design
            team, but it also brings benefits to engineering teams. It makes
            sure that our experiences have a consistent look and feel, not just
            in our design specs, but in production.
          </Text>
        </Container>

      
          <VStack> 
        
       
         
          <CardComponent 
          skill="one two"
          name="three foor"
          > sdkfjdksf</CardComponent>
          </VStack>
      </Container>
    </Center>
  );
}

export default Skills;
