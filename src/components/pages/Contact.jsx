import React from "react";
import { Heading, Container, Text } from "@chakra-ui/react";

function Contact() {
  return (
    <Container>
      <Heading as="h1" fontSize={"6xl"} textStyle="h1">
        Heading 1
      </Heading>
      <Heading as="h2" fontSize={"3xl"} textStyle="h2">
        Heading 2
      </Heading>
      <Heading as="h3" fontSize={"lg"} textStyle="h3">
        Heading 3
      </Heading>
      <Text fontSize="md" lineHeight="1.6" color="gray.700">
        Текст по умолчанию, который использует шрифт body из темы.
      </Text>
    </Container>
  );
}

export default Contact;
