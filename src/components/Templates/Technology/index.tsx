import { H3, H5 } from "../../Atoms";
import {
  StlSection,
  SectionContainer,
  ContainerHeader,
  HeaderImage,
  ContainerBody,
  Titles
} from "./styles";
import rocket from "../../../assets/technology/image-launch-vehicle-landscape.jpg";

const Crew = () => {
  return (
    <>
      <StlSection>
        <SectionContainer>
          <ContainerHeader>
            <H5>
              <span>03 </span>Space launch 101
            </H5>
            <HeaderImage>
              <img src={rocket} alt="Space launch 101" />
            </HeaderImage>
          </ContainerHeader>
          <ContainerBody>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
            <Titles>
              <H5>The terminology...</H5>
              <H3>Launch vehicle</H3>
            </Titles>
            <p>
              A launch vehicle or carrier rocket is a rocket-propelled vehicle
              used to carry a payload from Earth's surface to space, usually to
              Earth orbit or beyond. Our WEB-X carrier rocket is the most
              powerful in operation. Standing 150 metres tall, it's quite an
              awe-inspiring sight on the launch pad!
            </p>
          </ContainerBody>
        </SectionContainer>
      </StlSection>
    </>
  );
};

export default Crew;
