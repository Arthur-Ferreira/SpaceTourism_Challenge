import { Anchor } from "../../../Atoms";
import { StlNav, HeaderList } from "./styles";
import { menuLinks } from "../menu.data";

const Nav = () => {
  return (
    <StlNav>
      <HeaderList>
        {menuLinks.map((menuLink) => (
          <li key={menuLink.title}>
            <Anchor to={menuLink.href}>{menuLink.title}</Anchor>
          </li>
        ))}
      </HeaderList>
    </StlNav>
  );
};

export default Nav;
