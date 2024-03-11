import { StlNav, CrewList } from "./styles";
import { useAppDispatch } from "../../../../store/hooks";
import { selectCrew } from "../../../../feature/crew/crewSlice";
import { crewLinks } from "../menu.data";

const CrewNav = () => {
  const dispatch = useAppDispatch();
  const handleSelect = (selectedButton: string) => {
    dispatch(selectCrew(selectedButton));
  };

  return (
    <StlNav>
      <CrewList>
        {crewLinks.map((link) => (
          <li key={link.title}>
            <button onClick={() => handleSelect(link.title)}>
              {link.title}
            </button>
          </li>
        ))}
      </CrewList>
    </StlNav>
  );
};

export default CrewNav;
