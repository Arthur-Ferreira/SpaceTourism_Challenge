import { useParams } from "react-router-dom";
import { crewInfos } from "./crew.data";

import { Anchor, H3, H4, H5 } from "../../Atoms";

import { Article, ArticleHeader, ArticleImage, Titles } from "./styles";

interface ICrewArticle extends ICrew {}

const CrewArticle: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  const selected: ICrewArticle | undefined = crewInfos.find(
    (crew) => crew.name.toLowerCase() === name
  );

  if (!selected) return null;

  return (
    <Article>
      <ArticleHeader>
        <H5>
          <span>02 </span>Meet your crew
        </H5>
        <ArticleImage>
          <img
            src={selected.images.png}
            alt={`${selected.role} - ${selected.name}`}
          />
        </ArticleImage>
        <hr />
        <ul>
          <li>
            <Anchor to="douglas hurley">
              <input type="radio" name="crew" id="douglas-hurley" />
            </Anchor>
          </li>
          <li>
            <Anchor to="mark shuttleworth">
              <input type="radio" name="crew" id="mark-shuttleworth" />
            </Anchor>
          </li>
          <li>
            <Anchor to="victor glover">
              <input type="radio" name="crew" id="victor-glover" />
            </Anchor>
          </li>
          <li>
            <Anchor to="anousheh ansari">
              <input type="radio" name="crew" id="anousheh-ansari" />
            </Anchor>
          </li>
        </ul>
      </ArticleHeader>
      <div>
        <Titles>
          <H4>{selected.role}</H4>
          <H3>{selected.name}</H3>
        </Titles>
        <p>{selected.bio}</p>
      </div>
    </Article>
  );
};

export default CrewArticle;
