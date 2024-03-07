import styled from "styled-components";
import { colors } from "../../../Global/vars";

const StlNav = styled.nav`
  height: 6rem;
  display: none;

  /* Add the blur effect */
  backdrop-filter: blur(10px);

  @media(min-width: 768px) {
    display: block;
  }
`;

const HeaderList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  li a {
    padding: 0.2rem 0;

    &:hover {
      border-bottom: 4px solid ${colors.white};
    }
  }
`;

export { StlNav, HeaderList }