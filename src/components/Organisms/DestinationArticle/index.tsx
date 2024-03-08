import { useParams } from "react-router-dom";
import { destinationInfos } from "./destinations.data";

import { H2, H5, SubH1, SubH2 } from "../../Atoms";
import DestinationNav from "../../Molecules/Nav/DestinationNav";

import {
  Article,
  ArticleHeader,
  HeaderImage,
  ArticleBody,
  SubHeading,
} from "./styles";

interface IDestinationArticle extends IDestination {}

const DestinationArticle: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  const selected: IDestinationArticle | undefined = destinationInfos.find(
    (destination) => destination.name.toLowerCase() === name
  );

  if (!selected) return null;

  return (
    <Article>
      <ArticleHeader>
        <H5>
          <span>01 </span>Pick your destination
        </H5>
        <HeaderImage>
          <img src={selected.images.png} alt={selected.name} />
        </HeaderImage>
        <DestinationNav />
      </ArticleHeader>
      <ArticleBody>
        <H2>{selected.name}</H2>
        <p>{selected.description}</p>
        <hr />

        <SubHeading>
          <div>
            <SubH2>Avg. distance</SubH2>
            <SubH1>{selected.distance}</SubH1>
          </div>
          <div>
            <SubH2>Est. travel time </SubH2>
            <SubH1>{selected.travel}</SubH1>
          </div>
        </SubHeading>
      </ArticleBody>
    </Article>
  );
};

export default DestinationArticle;
