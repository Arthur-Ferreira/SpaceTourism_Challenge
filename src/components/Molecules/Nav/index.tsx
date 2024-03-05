import { Anchor } from "../../Atoms";
import { StlList, StlNav } from "./styles";

const Nav = () => {
  return (
    <StlNav>
      <StlList>
        <li>
          <Anchor to="/"><strong>00</strong> Home</Anchor>
        </li>
        <li>
          <Anchor to="/"><strong>01</strong> Destination</Anchor>
        </li>
        <li>
          <Anchor to="/"><strong>02</strong> Crew</Anchor>
        </li>
        <li>
          <Anchor to="/"><strong>03</strong> Technology</Anchor>
        </li>
      </StlList>
    </StlNav>
  );
};

export default Nav;
