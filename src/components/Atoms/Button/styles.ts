import styled from "styled-components";
import { colors } from "../../Global/vars";

const StlButton = styled.button`
  color: ${colors.richBlack};
  font-size: 1.25rem;
  letter-spacing: 0.078rem;
  cursor: pointer;
  
  /* letter-spacing: 0.125rem; */

  &.primary{
    border: none;
    background: none;
  }

  &.secondary {
    background-color: ${colors.white};
    border: none;
    border-radius: 50%;
    width: 9.375rem;
    height: 9.375rem;

    &:hover {
      box-shadow: 0px 0px 0px 2.5rem rgba(0, 0, 0, 0.5);
    }
  }
`;

const StlDestButton = styled.button`
  font-family: "Barlow Condensed", sans-serif;
  color: ${colors.white};
  font-size: 1rem;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0.169rem;
  text-transform: uppercase;
  cursor: pointer;
  background: transparent;
  border: none;
  border-bottom: 4px solid transparent;
  padding-bottom: 0.5rem;

  &:hover {
    border-bottom: 4px solid ${colors.white};
  }
`;

const StlCrewButton = styled.button`
  cursor: pointer;
  background: ${colors.white};
  opacity: 0.3;
  border: none;
  padding: 0.3rem;
  border-radius: 50%;
  
  &:hover {
    opacity: 1;
  }
  `;

const StlTechButton = styled.button`
  color: ${colors.white};
  font-size: 1rem;
  font-weight: 400;
  font-style: normal;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.169rem;
  background: transparent;
  border: 1px solid ${colors.white};
  border-radius: 50%;
  padding: 0.6rem 1rem;

  &:hover {
    color: ${colors.richBlack};
    background-color: ${colors.white};
  }
`;


export { StlButton, StlDestButton, StlCrewButton, StlTechButton };
