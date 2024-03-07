import styled from "styled-components";
import { colors } from "../../../Global/vars";

const StlNav = styled.nav`
  width: 100%;
  height: 100%;
  text-align: initial;
`;

const AsideList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  li a {
    display: block;
    padding: 0.2rem 0;

    &:hover {
      border-right: 4px solid ${colors.white};
    }
  }
`;

export { StlNav, AsideList }