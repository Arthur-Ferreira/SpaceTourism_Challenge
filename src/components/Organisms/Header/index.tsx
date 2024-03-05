import logo from "../../../assets/shared/logo.svg";
import Button from "../../Atoms/Button";
import { images } from "../../Global/vars";
import Nav from "../../Molecules/Nav";
import { StlHeader, HeaderContainer } from "./styles";

const Header = () => {
  function handleClick() {
    console.log("Cliquei")
  }

  return (
    <StlHeader>
      <HeaderContainer>
        <div className="logo">
          <img src={logo} alt="Space Tourism logo" />
        </div>
        <Nav />
        <Button type="button" className="primary" onClick={handleClick}>
          <img src={images.hamburgerIcon} alt="Hamburguer Menu" />
        </Button>
      </HeaderContainer>
    </StlHeader>
  );
};

export default Header;
