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
    font-weight: 400;
    font-style: normal;
  }

  body {
    width: 100%;
    height: 100%;
    position: relative;
  }

  main {
    width: 100%;
    height: 100%;
    text-align: center;
  }

  h1, h2, h3, h4, button {
    font-family: "Bellefair", serif;
    font-weight: 400;
    font-style: normal;
    text-transform: uppercase;
  }
  
  ul, ol {
    list-style: none;
  }
  
  p {
    color: ${colors.periwinkle};
    font-size: 0.938rem;
    line-height: 1.563rem;

    /* font-size: 1rem; */

    /* font-size: 1.125rem; */
    /* line-height: 1.75rem; */
    
    /* line-height: 2rem; */
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    color: ${colors.white};
  }

`;

export default GlobalStyle