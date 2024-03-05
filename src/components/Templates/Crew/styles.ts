import styled from "styled-components";

import { colors, images } from "../../Global/vars";

const StlSection = styled.section`
  background: url(${images.crewMobile}) no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
`;

const SectionContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 5.5rem 1.5rem 3.625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  `;

const ContainerHeader = styled.div`
  width: 100%;
  h5 {
    color: ${colors.white};
    padding-bottom: 0.375rem;
    span {
      opacity: 0.3;
    }
  }

  hr {
    margin-bottom: 2rem;
    border-color: ${colors.charcoal};
  }
  
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.625rem;
    text-transform: uppercase;
    letter-spacing: 0.148rem;
  }
`;

const HeaderImage = styled.div`
  width: 100%;
  max-width: 11.07rem;
  height: 100%;
  max-height: 13.875rem;
  margin: 2rem auto 0;

  img {
    width: 100%;
    height: 100%;
  }

`;

const Titles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem 0;
  
  h4 {
    opacity: 0.5;
  }

`;


export { StlSection, SectionContainer, ContainerHeader, HeaderImage, Titles }