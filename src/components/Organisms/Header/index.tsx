import logo from "../../../assets/shared/logo.svg";
import { useAppDispatch } from "../../../store/hooks";
import { Button } from "../../Atoms/Button";
import { images } from "../../Global/vars";
import Nav from "../../Molecules/HeaderNav";
import { StlHeader, HeaderContainer } from "./styles";
import { open } from "../../../feature/menu/menuSlice";

// type TAsideProps = {
//   isOpen: boolean;
// }

const Header = () => {
  // : React.FC<TAsideProps> = ({ isOpen }) => {
  const dispatch = useAppDispatch();

  // if (!isOpen) return null;

  const handleOpenMenu = () => {
    dispatch(open());
  };

  return (
    <StlHeader>
      <HeaderContainer>
        <div className="logo">
          <img src={logo} alt="Space Tourism logo" />
        </div>
        <Nav />
        <Button type="button" className="primary" onClick={handleOpenMenu}>
          <img src={images.hamburgerIcon} alt="Hamburguer Menu" />
        </Button>
      </HeaderContainer>
    </StlHeader>
  );
};

export default Header;
