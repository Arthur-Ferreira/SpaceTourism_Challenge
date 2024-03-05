import styled from "styled-components";

const StlNav = styled.nav`
  width: 100%;
  height: 100%;
  display: none;

  &.open {
    display: block;
  }
`;

const StlList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export { StlNav, StlList }