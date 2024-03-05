import { H2, H5, SubH1, SubH2 } from "../../Atoms";
import {
  StlSection,
  SectionContainer,
  ContainerHeader,
  HeaderImage,
  ContainerBody,
  SubHeading,
} from "./styles";
import moon from "../../../assets/destination/image-moon.png";

const Destination = () => {
  return (
    <>
      <StlSection>
        <SectionContainer>
          <ContainerHeader>
            <H5>
              <span>01 </span>Pick your destination
            </H5>
            <HeaderImage>
              <img src={moon} alt="Moon Picture" />
            </HeaderImage>
            <ul>
              <li>Moon</li>
              <li>Mars</li>
              <li>Europa</li>
              <li>Titan</li>
            </ul>
          </ContainerHeader>
          <ContainerBody>
            <H2>Moon</H2>
            <p>
              See our planet as you’ve never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed.
              While you’re there, take in some history by visiting the Luna 2
              and Apollo 11 landing sites.
            </p>
            <hr />

            <SubHeading>
              <div>
                <SubH2>Avg. distance</SubH2>
                <SubH1>384,400 km</SubH1>
              </div>
              <div>
                <SubH2>Est. travel time </SubH2>
                <SubH1>3 days</SubH1>
              </div>
            </SubHeading>
          </ContainerBody>
        </SectionContainer>
      </StlSection>
    </>
  );
};

export default Destination;
