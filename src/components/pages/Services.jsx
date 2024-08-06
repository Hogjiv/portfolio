// components/Navbar.jsx
import React from 'react';

import ButtonComponent from '../ButtonComponent';
import { Heading, Container, Text, Center, HStack, Stack } from '@chakra-ui/react' 
function Services() { 
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
          Services
        </Heading>

        <Container  color="white" centerContent maxW="100%" w="900px">
          <Text textTransform={"uppercase"} pb={3}>
          Since I have an extensive background in 3D and am a novice web developer, I can offer various services. Let me know what you're interested in, and I'll be happy to help you.
          </Text>
        </Container>
        <ButtonComponent> </ButtonComponent>
 
           
      </Container>
    </Center>
  );
}

export default Services;
