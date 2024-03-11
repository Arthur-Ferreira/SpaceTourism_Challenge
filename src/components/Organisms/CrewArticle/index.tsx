import { useAppSelector } from "../../../store/hooks";

import { H3, H4, H5 } from "../../Atoms";
import CrewNav from "../../Molecules/Nav/CrewNav";

import { Article, ArticleHeader, ArticleImage, Titles } from "./styles";

const CrewArticle: React.FC = () => {
  const character = useAppSelector((state) => state.crew.character);

  if (!character) return null;

  return (
    <Article>
      <ArticleHeader>
        <H5>
          <span>02 </span>Meet your character
        </H5>
        <ArticleImage>
          <img
            src={character.images.png}
            alt={`${character.role} - ${character.name}`}
          />
        </ArticleImage>
        <hr />
        <CrewNav />
      </ArticleHeader>
      <div>
        <Titles>
          <H4>{character.role}</H4>
          <H3>{character.name}</H3>
        </Titles>
        <p>{character.bio}</p>
      </div>
    </Article>
  );
};

export default CrewArticle;
