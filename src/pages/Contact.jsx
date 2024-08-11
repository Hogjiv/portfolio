import React from "react";
import {
  Heading,
  Container,
  Text,
  HStack,
  VStack,
  Button,
  Link,
} from "@chakra-ui/react";
import PageTemplate from "../PageTemplate";

function Contact() {
  return (
    <PageTemplate heading="Contacts">
      <VStack spacing={3} textTransform="uppercase" color={"violet"}>
        <Link> Location: everywhere </Link>
        <Link href="tel:+8998327498374973298" isExternal>
          +8998327498374973298
        </Link>
        <Link href="mailto:hhyperplace@gmail.com" isExternal>
        hhyperplace@gmail.com
          github
        </Link>
        <Link href="https://www.linkedin.com/in/avdeyeva/" isExternal>
          linkedin
        </Link>
        <Link href="https://github.com/Hogjiv" isExternal>
          github
        </Link>
      </VStack>
    </PageTemplate>
  );
}

export default Contact;
