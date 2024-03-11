import { StlNav, DestinationsList } from "./styles";
import { destinationLinks } from "../menu.data";
import { useAppDispatch } from "../../../../store/hooks";
import { selectDestination } from "../../../../feature/destination/destinationSlice";

const DestinationNav = () => {
  const dispatch = useAppDispatch();
  const handleSelect = (selectedButton: string) => {
    dispatch(selectDestination(selectedButton));
  };

  return (
    <StlNav>
      <DestinationsList>
        {destinationLinks.map((link) => (
          <li key={link.title}>
            <button onClick={() => handleSelect(link.title)}>
              {link.title}
            </button>
          </li>
        ))}
      </DestinationsList>
    </StlNav>
  );
};

export default DestinationNav;
