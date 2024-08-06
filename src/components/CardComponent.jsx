import React from "react";
import { Box, VStack, Text } from "@chakra-ui/react";
 

function CardComponent({ skill, image }) {
  return (
    // backgroundImage={`url(${image})`}
    // backgroundSize="cover"
    // backgroundPosition="center"

    <Box
      width="300px"
      h="500px"
      backgroundImage={`url(${image})`}
      backgroundSize="cover"
      className="skill-card"
      borderRadius="35px"
    >
      <VStack
        spacing={1}
        align="center"
        height="100%"
        justifyContent="center"
        borderRadius="35px"
        backgroundColor="rgba(0,0,0,0.7)"
        overflow={"auto"}
      >
        {skill.map((item, index) => (
          <Text
            key={index}
            fontSize="md"
            fontFamily="Montserrat Variable, sans-serif"
            textTransform="uppercase"
            color="white"
          >
            {item}
          </Text>
        ))}
      </VStack>
    </Box>
  );
}

export default CardComponent;
