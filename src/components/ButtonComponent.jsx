import React from "react";

import { Box, VStack, Text, HStack, Button, Stack } from "@chakra-ui/react";

function ButtonComponent() {
  return (
    <VStack direction="row" spacing={4} align="center">
      <Button variant="solid" size="md" textTransform="uppercase">
        Web development
      </Button>
      
    </VStack>
  );
}

export default ButtonComponent;
