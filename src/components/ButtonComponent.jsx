import React from "react";
import { Box, VStack, Text, HStack, Button, Stack } from "@chakra-ui/react";

function ButtonComponent() {
  return (
    // <HStack  bg="red.200" w="200px" h="40px">
    //   <Box bg="red.800" w="170px" h="35px">
    //     <Text color="white">Hello Button</Text>

    //   </Box>
    //   <Box w={"20px"} h={"20px"} bg="red.500"/>
    // </HStack>
    <VStack direction="row" spacing={4} align="center">
      <Button
        variant="solid"
        size={"xl"}
        variants="with-shadow"
        textTransform={"uppercase"}
      >
        Web development
      </Button>
      <Button colorScheme="teal" variant="outline">
        Button
      </Button>
      <Button colorScheme="teal" variant="ghost">
        Button
      </Button>
      <Button colorScheme="red" variant="link">
        Button
      </Button>
    </VStack>
  );
}

export default ButtonComponent;
