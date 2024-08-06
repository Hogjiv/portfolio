import React from "react";
import CardComponent from "../CardComponent.jsx";
import { skills } from "../../skills.jsx";
import {
  Center,
  Text,
  Heading,
  Container,
  Box,
  HStack,
  VStack,
} from "@chakra-ui/react";

function createSkill(data) {
  return (
    <VStack key={data.id} spacing={3}>
      <Heading as="h5" textStyle="h5" fontSize="xl" >
        {data.name}
      </Heading>
      <CardComponent 
       skill={data.skill} image={data.image} />
    </VStack>
  );
}

function Skills() {
  return (
    <Center>
      <Container 
        maxW="100%"
        p={4}
        minH="calc(100vh - 66px)"
        pt={3}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Heading as="h1" fontSize="3xl" textStyle="h1" mb={3} color="violet">
          Skills
        </Heading>

        <Container  color="white" centerContent maxW="100%" w="900px">
          <Text textTransform={"uppercase"} pb={3}>
            My skills cover key areas of web development, UI/UX design, and 3D
            art. I create functional and engaging projects using modern tools
            and technologies.
          </Text>
        </Container>

        <HStack    
          align="start" 
          w="100%" 
          justify="space-around" 
          wrap="wrap"
        >
          {skills.map(createSkill)}
        </HStack>
           
      </Container>
    </Center>
  );
}

export default Skills;
