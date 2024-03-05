import { H3, H4, H5 } from "../../Atoms";
import {
  StlSection,
  SectionContainer,
  ContainerHeader,
  HeaderImage,
  Titles,
} from "./styles";
import commander from "../../../assets/crew/image-douglas-hurley.png";

const Crew = () => {
  return (
    <>
      <StlSection>
        <SectionContainer>
          <ContainerHeader>
            <H5>
              <span>02 </span>Meet your crew
            </H5>
            <HeaderImage>
              <img src={commander} alt="Commander - Douglas Hurley" />
            </HeaderImage>
            <hr />
          </ContainerHeader>
          <div>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <Titles>
              <H4>Commander</H4>
              <H3>Douglas Hurley</H3>
            </Titles>
            <p>
              Douglas Gerald Hurley is an American engineer, former Marine Corps
              pilot and former NASA astronaut. He launched into space for the
              third time as commander of Crew Dragon Demo-2.
            </p>
          </div>
        </SectionContainer>
      </StlSection>
    </>
  );
};

export default Crew;
