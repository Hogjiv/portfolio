import React from "react";
import { Center, Box, HStack, Text, VStack, Heading } from "@chakra-ui/react";

function CardComponent(props) {
  return (
    <VStack mt={4}>
      <Heading as="h3" fontSize="xl" textStyle="h3" color="white">
      {props.name}
      </Heading>
      <Center className="skill-card">
       {props.skill}
      </Center>
    </VStack>
  );
}

export default CardComponent;
