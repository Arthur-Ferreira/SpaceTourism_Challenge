import { StlNav, TechnologyList } from "./styles";
import { useAppDispatch } from "../../../../store/hooks";
import { selectTechnology } from "../../../../feature/technology/technologySlice";
import { technologyLinks } from "../menu.data";

const TechnologyNav = () => {
  const dispatch = useAppDispatch();
  const handleSelect = (selectedButton: string) => {
    dispatch(selectTechnology(selectedButton));
  };

  return (
    <StlNav>
      <TechnologyList>
        {technologyLinks.map((link) => (
          <li key={link.title}>
            <button onClick={() => handleSelect(link.title)}>
              {link.title}
            </button>
          </li>
        ))}
      </TechnologyList>
    </StlNav>
  );
};

export default TechnologyNav;
