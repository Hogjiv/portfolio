import { border, extendTheme } from "@chakra-ui/react";
import { color } from "framer-motion";

const theme = extendTheme({
  components: {
    Link: {
      baseStyle: {
        fontSize: "20px",
        textTransform: "uppercase", 
        _hover: {
          color: "#ECBFFC", // Цвет при наведении
          fontSize: "24px",
          transition: "font-size 0.7s ease, color 0.3s ease",  
        },
      },
    },
    Button: {
      baseStyle: {
        fontWeight: "regular",
        fontFamily: "Fjalla One",
        borderRadius: "0px",
      },
      sizes: {
        md: {
          w: "200px",
          h: "55px",
          fontSize: "lg",
          px: "22px",
        },
      },
      variants: {
        "with-shadow": {
          bg: "#8C4DA3",
          boxShadow: "0 0 2px 2px #efdfde",
          color: "white", // Цвет текста внутри кнопки
          _hover: {
            bg: "#7C3C8A", // Цвет при наведении
          },
          _active: {
            bg: "#6C2C7A", // Цвет при клике
          },
        },
        solid: (props) => ({
          bg: props.colorMode === "dark" ? "#C65FEB" : "#8C4DA3",
          color: "white", // Цвет текста внутри кнопки
          _hover: {
            bg: props.colorMode === "dark" ? "#B34DDB" : "#7C3C8A",
          },
          _active: {
            bg: props.colorMode === "dark" ? "#A23CCA" : "#6C2C7A", // Цвет при клике
          },
        }),
      },
      defaultProps: {
        size: "lg",
        variant: "solid",
      },
    },
  },

  space: {
    1: "4px",
    2: "18px",
    3: "26px",
    4: "45px",
    5: "60px",
    6: "70px",
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "20px",
    xl: "24px",
    "2xl": "30px",
    "3xl": "36px",
    "4xl": "48px",
    "5xl": "60px",
    "6xl": "72px",
  },
  textStyles: {
    h1: {
      fontSize: "3xl",
      fontWeight: "bold",
      textTransform: "uppercase",
      color: "white",
      fontFamily: "Montserrat Variable, sans-serif",
    },
    h2: {
      fontSize: "4xl",
      fontWeight: "semibold",
      textTransform: "uppercase",
      color: "white",
      fontFamily: "Montserrat Variable, sans-serif",
    },
    h3: {
      fontSize: "3xl",
      fontWeight: "medium",
      textTransform: "uppercase",
      color: "violet",
      fontFamily: "Montserrat Variable, sans-serif",
    },
    h5: {
      fontWeight: "medium",
      textTransform: "uppercase",
      color: "white",
    },
    body: {
      fontSize: "lg",
      color: "white",
      fontFamily: "Barlow Semi Condensed, sans-serif",
    },
  },
  colors: {
    black: "#000000",
    white: "#FFFFFF",
    yellow: "#ffc525",
    violet: "#C65FEB",
    lightOrange: "#e18127",
  },
  fonts: {
    body: "Barlow Semi Condensed, sans-serif",
    heading: "Montserrat Variable, sans-serif",
    mono: "Menlo, monospace",
  },
});

export default theme;
