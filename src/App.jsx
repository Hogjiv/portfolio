import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import theme from "./theme.jsx";

import NavBar from "./components/NavBar.jsx";
import { Routes, Route } from "react-router-dom";
import Services from "./pages/Services.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Skills from "./pages/Skills.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import styles from "./styles/styles.css";
import fonts from "./styles/fonts.css";
import "@fontsource/barlow-semi-condensed";
import "@fontsource/barlow-semi-condensed/400.css"; // Regular
import "@fontsource/barlow-semi-condensed/600.css"; // Semi-bold
import "@fontsource/barlow-semi-condensed/800.css"; // Bold
import "@fontsource/fjalla-one";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
