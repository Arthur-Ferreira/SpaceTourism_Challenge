import { createGlobalStyle } from "styled-components";
import { colors } from "./vars";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-family: "Barlow Condensed", sans-serif;
    color: ${colors.white};
    font-size: 1rem;
  }

  body {
    width: 100%;
    height: 100%;
    position: relative;
  }

  h1, h2, h3, h4 {
    font-family: "Bellefair", serif;
  }

  ul, ol {
    list-style: none;
  }
`;

export default GlobalStyle