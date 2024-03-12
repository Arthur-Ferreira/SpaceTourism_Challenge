import { H2, H5, SubH1, SubH2 } from "../../Atoms";
import { DestButton } from "../../Atoms/Button";
import Nav from "../../Molecules/Nav";

import { destinationLinks } from "../../Molecules/Nav/menu.data";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { selectDestination } from "../../../feature/destination/destinationSlice";

import {
  Article,
  ArticleHeader,
  HeaderImage,
  ArticleBody,
  SubHeading,
} from "./styles";

const DestinationArticle: React.FC = () => {
  const dispatch = useAppDispatch();

  const destination = useAppSelector((state) => state.destination.destination);

  const handleSelect = (selectedButton: string) => {
    dispatch(selectDestination(selectedButton));
  };

  if (!destination) return null;

  return (
    <Article>
      <ArticleHeader>
        <H5>
          <span>01 </span>Pick your destination
        </H5>
        <HeaderImage>
          <img src={destination.images.png} alt={destination.name} />
        </HeaderImage>
        <Nav>
          {destinationLinks.map((link) => (
            <li key={link.title}>
              <DestButton
                type="submit"
                onClick={() => handleSelect(link.title)}
              >
                {link.title}
              </DestButton>
            </li>
          ))}
        </Nav>
      </ArticleHeader>
      <ArticleBody>
        <H2>{destination.name}</H2>
        <p>{destination.description}</p>
        <hr />

        <SubHeading>
          <div>
            <SubH2>Avg. distance</SubH2>
            <SubH1>{destination.distance}</SubH1>
          </div>
          <div>
            <SubH2>Est. travel time </SubH2>
            <SubH1>{destination.travel}</SubH1>
          </div>
        </SubHeading>
      </ArticleBody>
    </Article>
  );
};

export default DestinationArticle;
