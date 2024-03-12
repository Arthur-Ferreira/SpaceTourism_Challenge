import { useAppSelector } from "../../../store/hooks";
import { useAppDispatch } from "../../../store/hooks";
import { selectCrew } from "../../../feature/crew/crewSlice";
import { crewLinks } from "../../Molecules/Nav/menu.data";
import { H3, H4, H5 } from "../../Atoms";
import { CrewButton } from "../../Atoms/Button";
import Nav from "../../Molecules/Nav";

import { Article, ArticleHeader, ArticleImage, Titles } from "./styles";

const CrewArticle: React.FC = () => {
  const character = useAppSelector((state) => state.crew.character);

  const dispatch = useAppDispatch();
  const handleSelect = (selectedButton: string) => {
    dispatch(selectCrew(selectedButton));
  };

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
        <Nav>
          {crewLinks.map((link) => (
            <li key={link.title}>
              <CrewButton
                type="button"
                onClick={() => handleSelect(link.title)}
              ></CrewButton>
            </li>
          ))}
        </Nav>
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
