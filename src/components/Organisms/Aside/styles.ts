import styled from "styled-components";

const StlAside = styled.aside`
  width: 64%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;

  /* Add the blur effect */
  backdrop-filter: blur(10px);
  
  @media(min-width: 768px) {
    display: none;
  }
`;

const AsideContainer = styled.div`
  position: relative;
  padding-top: 7rem;
  padding-left: 1.653rem;
  
  button {  
    position: absolute;
    top: 2.122rem;
    right: 1.653rem;
  }
`;


export {
  StlAside,
  AsideContainer
}