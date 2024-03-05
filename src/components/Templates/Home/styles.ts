import styled from "styled-components";

import { images } from "../../Global/vars";

const StlSection = styled.section`
  background: url(${images.homeMobile}) no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export { StlSection }