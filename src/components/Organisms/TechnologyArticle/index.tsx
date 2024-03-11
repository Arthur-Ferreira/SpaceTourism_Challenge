import { useAppSelector } from "../../../store/hooks";
import { H3, H5 } from "../../Atoms";
import TechnologyNav from "../../Molecules/Nav/TechnologyNav";

import {
  Article,
  ArticleHeader,
  HeaderImage,
  ArticleBody,
  Titles,
} from "./styles";

const TechnologyArticle: React.FC = () => {

  const gear = useAppSelector((state) => state.technology.gear)

  if (!gear) return null;

  return (
    <Article>
      <ArticleHeader>
        <H5>
          <span>03 </span>Space launch 101
        </H5>
        <HeaderImage>
          <img src={gear.images.landscape} alt="Space launch 101" />
        </HeaderImage>
      </ArticleHeader>
      <ArticleBody>
        <TechnologyNav />
        <Titles>
          <H5>The terminology...</H5>
          <H3>{gear.name}</H3>
        </Titles>
        <p>{gear.description}</p>
      </ArticleBody>
    </Article>
  );
};

export default TechnologyArticle;
