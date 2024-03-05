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

export default StlButton;
