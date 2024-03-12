import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { selectTechnology } from "../../../feature/technology/technologySlice";
import { technologyLinks } from "../../Molecules/Nav/menu.data";
import { H3, H5 } from "../../Atoms";
import Nav from "../../Molecules/Nav";

import {
  Article,
  ArticleHeader,
  HeaderImage,
  ArticleBody,
  Titles,
} from "./styles";
import { TechButton } from "../../Atoms/Button";

const TechnologyArticle: React.FC = () => {
  const dispatch = useAppDispatch();
  let count = 1;
  const gear = useAppSelector((state) => state.technology.gear);

  if (!gear) return null;

  const handleSelect = (selectedButton: string) => {
    dispatch(selectTechnology(selectedButton));
  };

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
        <Nav>
          {technologyLinks.map((link) => (
            <li key={link.title}>
              <TechButton
                type="button"
                onClick={() => handleSelect(link.title)}
              >
                {count++}
              </TechButton>
            </li>
          ))}
        </Nav>
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
