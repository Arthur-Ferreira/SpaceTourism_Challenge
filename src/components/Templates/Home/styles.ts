import styled from "styled-components";

import { images } from "../../Global/vars";

const StlSection = styled.section`
  background: url(${images.homeMobile}) no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  `;

const SectionContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 7rem 1.5rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export { StlSection, SectionContainer }