import { Anchor } from "../../../Atoms";
import { StlNav, AsideList } from "./styles";
import { menuLinks } from "../menu.data";

const AsideNav = () => {
  return (
    <StlNav>
      <AsideList>
        {menuLinks.map((menuLink) => (
          <li key={menuLink.title}>
            <Anchor to={menuLink.href}>
              <strong>{menuLink.number} </strong>
              {menuLink.title}
            </Anchor>
          </li>
        ))}
      </AsideList>
    </StlNav>
  );
};

export default AsideNav;
