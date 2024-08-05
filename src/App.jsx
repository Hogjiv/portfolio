 
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import theme from "./theme.jsx";



import NavBar from "./components/NavBar.jsx";
import { Routes, Route } from "react-router-dom";
import Services from "./components/pages/Services.jsx";
import Portfolio from "./components/pages/Portfolio.jsx";
import Skills from "./components/pages/Skills.jsx";
import Contact from "./components/pages/Contact.jsx";
import About from "./components/pages/About.jsx";
import styles from "./styles/styles.css";
import fonts from "./styles/fonts.css";
import '@fontsource/barlow-semi-condensed'; 
import '@fontsource/barlow-semi-condensed/400.css'; // Regular
import '@fontsource/barlow-semi-condensed/600.css'; // Semi-bold
import '@fontsource/barlow-semi-condensed/800.css'; // Bold


function App() {
  return (
    <ChakraProvider theme={theme}>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<About />}>
          {" "}
        </Route>
        <Route path="/services" element={<Services />}>
          {" "}
        </Route>
        <Route path="/skills" element={<Skills />}>
          {" "}
        </Route>
        <Route path="/portfolio" element={<Portfolio />}>
          {" "}
        </Route>

        <Route path="/contact" element={<Contact />}>
          {" "}
        </Route>
      </Routes>


    </ChakraProvider>
  );
}

export default App;
