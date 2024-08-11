// components/Navbar.jsx
import React, { useState } from "react";
import PageTemplate from "../PageTemplate";
import { buttons } from "../skills.js";

//import ButtonComponent from "../ButtonComponent";
import {
  Heading,
  Container,
  Button,
  Text,
  Center,
  HStack,
  Accordion,
  Box,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  VStack,
} from "@chakra-ui/react";

function Services() {
  const [isRotated, setIsRotated] = useState(null);

  const handleRotate = (accordionId) => {
    setIsRotated(accordionId === isRotated ? null : accordionId);
  };

  return (
    <PageTemplate
    overflow="auto"  
      heading={"Services"}
      description={
        "  Since I have an extensive background in 3D and am a novice web developer, I can offer various services. Let me know what you'reinterested in, and I'll be happy to help you. "
      }
    >
      {buttons.map((data, accordionId) => (
        <Accordion
          key={data.id}
          allowMultiple
          w={"70%"}
          mt={4}
          border="none"
          boxShadow="none"
          p={0}
          m={0}
        >
          <AccordionItem border="none">
            <AccordionButton
              justifyContent="center"
              alignItems="center"
              onClick={() => handleRotate(accordionId)}
            >
              <Button
                variant="solid"
                size="md"
                textTransform="uppercase"
                mr={2}
              >
                {data.name}
              </Button>
              <img
                src="/arrow.svg"
                alt="random"
                style={{
                  transform:
                    isRotated === accordionId
                      ? "rotate(90deg)"
                      : "rotate(0deg)",

                  transition: "transform 0.3s",
                  width: "20px",
                  height: "20px",
                }}
              />
            </AccordionButton>

            <AccordionPanel
           border="2px solid #837d7d"
              p={4}
              display="flex"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
            >
              {data.description}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      ))}
    </PageTemplate>
  );
}

export default Services;
