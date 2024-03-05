import styled from "styled-components";

const StlHeader = styled.header`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 1.5rem;
`;

export { StlHeader, HeaderContainer };