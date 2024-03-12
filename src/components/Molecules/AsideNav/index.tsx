import { Anchor } from "../../Atoms";
import { StlNav, AsideList } from "./styles";
import { menuLinks } from "../Nav/menu.data";
import { useAppDispatch } from "../../../store/hooks";
import { close } from "../../../feature/menu/menuSlice";


const AsideNav = () => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(close());
  }

  return (
    <StlNav>
      <AsideList>
        {menuLinks.map((menuLink) => (
          <li key={menuLink.title}>
            <Anchor to={menuLink.href} onClick={handleClick}>
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
