import styled from "styled-components";

import { colors, images } from "../../Global/vars";

const StlSection = styled.section`
  background: url(${images.technologyMobile}) no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
`;

const SectionContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 5.5rem 0 3.625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.125rem;
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
`;

const HeaderImage = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 2rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

`;

const ContainerBody = styled.div`
  width: 100%;
  padding: 2rem 1.5rem 0;
 

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.625rem;
    text-transform: uppercase;
    letter-spacing: 0.148rem;
  }
    
`;

const Titles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin: 1.625rem 0 1rem;
`;


export { StlSection, SectionContainer, ContainerHeader, HeaderImage, ContainerBody, Titles }