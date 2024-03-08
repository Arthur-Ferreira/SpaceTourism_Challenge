import { Anchor } from "../../../Atoms";
import { StlNav, DestinationsList } from "./styles";
import { destinationLinks } from "../menu.data";

const DestinationNav = () => {
  
  return (
    <StlNav>
      <DestinationsList>
        {destinationLinks.map((destination) => (
          <li key={destination.title}>
            <Anchor to={`${destination.href.toLowerCase()}`}>
              {destination.title}
            </Anchor>
          </li>
        ))}
      </DestinationsList>
    </StlNav>
  );
};

export default DestinationNav;
