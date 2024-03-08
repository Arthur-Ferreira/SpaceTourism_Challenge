import { useParams } from "react-router-dom";
import { technologyInfos } from "./technology.data";

import { Anchor, H3, H5 } from "../../Atoms";

import {
  Article,
  ArticleHeader,
  HeaderImage,
  ArticleBody,
  Titles,
} from "./styles";

interface ITechnologyArticle extends ITechnology {}

const TechnologyArticle: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  const selected: ITechnologyArticle | undefined = technologyInfos.find(
    (technology) => technology.name.toLowerCase() === name
  );

  if (!selected) return null;

  return (
    <Article>
      <ArticleHeader>
        <H5>
          <span>03 </span>Space launch 101
        </H5>
        <HeaderImage>
          <img src={selected.images.landscape} alt="Space launch 101" />
        </HeaderImage>
      </ArticleHeader>
      <ArticleBody>
        <ul>
          <li>
            <Anchor to={"launch vehicle"}>1</Anchor>
          </li>
          <li>
            <Anchor to={"spaceport"}>2</Anchor>
          </li>
          <li>
            <Anchor to={"space capsule"}>3</Anchor>
          </li>
        </ul>
        <Titles>
          <H5>The terminology...</H5>
          <H3>{selected.name}</H3>
        </Titles>
        <p>{selected.description}</p>
      </ArticleBody>
    </Article>
  );
};

export default TechnologyArticle;
