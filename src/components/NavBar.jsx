// components/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { Flex, Spacer, HStack } from "@chakra-ui/react";
function NavBar() {
  return (
    <div>
      <Flex className="navbar" align={"center"}>
        <HStack p="45px" spacing="30px">
          <NavLink to="/">
            <nav-header> Main</nav-header>
          </NavLink>
          <NavLink to="/about">
            <nav-header> About </nav-header>
          </NavLink>
          <NavLink to="/services">
            <nav-header> Services </nav-header>
          </NavLink>
          <NavLink to="/skills">
            <nav-header> Skills</nav-header>
          </NavLink>
          <NavLink to="/portfolio">
            <nav-header> Portfolio</nav-header>
          </NavLink>
          <NavLink to="/contact">
            <nav-header>Contact </nav-header>
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
