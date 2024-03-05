import logo from "../../../assets/shared/logo.svg";
import Nav from "../../Molecules/Nav";
import { StlHeader, HeaderContainer } from "./styles";

const Header = () => {
  return (
    <StlHeader>
      <HeaderContainer>
        <div className="logo">
          <img src={logo} alt="Space Tourism logo" />
        </div>
        <Nav />
      </HeaderContainer>
    </StlHeader>
  );
};

export default Header;
