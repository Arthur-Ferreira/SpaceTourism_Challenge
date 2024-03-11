import { H2, H5, SubH1, SubH2 } from "../../Atoms";
import DestinationNav from "../../Molecules/Nav/DestinationNav";

import {
  Article,
  ArticleHeader,
  HeaderImage,
  ArticleBody,
  SubHeading,
} from "./styles";
import { useAppSelector } from "../../../store/hooks";

const DestinationArticle: React.FC = () => {
  const destination = useAppSelector((state) => state.destination.destination);

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
        <DestinationNav />
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
