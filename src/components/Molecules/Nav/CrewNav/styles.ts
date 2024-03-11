import styled from "styled-components";
import { colors } from "../../../Global/vars";

const StlNav = styled.nav`
  margin-top: 1.625rem;
`;

const CrewList = styled.ul`
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

export { StlNav, CrewList }