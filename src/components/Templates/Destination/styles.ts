import styled from "styled-components";

import { images } from "../../Global/vars";

const StlSection = styled.section`
  background: url(${images.destinationMobile}) no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
`;

const SectionContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 5.5rem 1.5rem 3.625rem;
`;


export { StlSection, SectionContainer }