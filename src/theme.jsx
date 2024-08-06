import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        fontWeight: "regular",
        fontFamily: "Fjalla One",
        bg: "#ffc525",
        borderRadius: "0px",
      },
      // 2. We can add a new button size or extend existing
      sizes: {
        xl: {
          h: "76px",
          fontSize: "lg",
          px: "22px",
        },
      },
      // 3. We can add a new visual variant
      variants: {
        "with-shadow": {
          bg: "blue.400",
          boxShadow: "0 0 2px 2px #efdfde",
        },
        // 4. We can override existing variants
        solid: (props) => ({
          bg: props.colorMode === "dark" ? "green.200" : "blue.500",
        }),
        // 5. We can add responsive variants
        sm: {
          bg: "teal.500",
          fontSize: "md",
        },
      },
      // 6. We can overwrite defaultProps
      defaultProps: {
        size: "lg", // default is md
        variant: "sm", // default is solid
        colorScheme: "green", // default is gray
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
  },
  fonts: {
    body: "Barlow Semi Condensed, sans-serif",
    heading: "Montserrat Variable, sans-serif",
    mono: "Menlo, monospace",
  },
});

export default theme;
