// components/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import {
  Flex,
  Spacer,
  Box,
  Heading,
  ButtonGroup,
  Button,
  VStack,
  HStack,
} from "@chakra-ui/react";
function NavBar() {
  return (
    <div>
      <Flex
        className="navbar"
        minWidth="max-content"  
        alignItems="center"
      >
        <HStack  p="45px"   spacing="30px">
          <NavLink  to="/about">
            {" "}
            <h5> About </h5>{" "}
          </NavLink>
          <NavLink    to="/services">
            {" "}
            <h5> Services </h5>{" "}
          </NavLink>{" "}
          <NavLink to="/skills">
            {" "}
            <h5> Skills</h5>
          </NavLink>
          <NavLink to="/portfolio">
            <h5> Portfolio</h5>
          </NavLink>
          <NavLink to="/contact">
            {" "}
            <h5>Contact </h5>
          </NavLink>
        </HStack>

        <Spacer />
        {/* <ButtonGroup gap="2">
          <Button bg={"#837d7d"} w={"200px"}>
            <NavLink to="/services">PROJECTS</NavLink>
          </Button>
        </ButtonGroup> */}
      </Flex>
    </div>
  );
}

export default NavBar;
