import { H2, H5 } from "../../Atoms";
import { StlSection, SectionContainer } from "./styles";

const Destination = () => {
  return (
    <>
      <StlSection>
        <SectionContainer>
          <H5>01 Pick your destination</H5>
          <nav>
            <ul>
              <li>Moon</li>
              <li>Mars</li>
              <li>Europa</li>
              <li>Titan</li>
            </ul>
          </nav>
          <H2>Moon</H2>
          <p>
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
          <hr />
          <div className="sub-title">Avg. distance</div>
          <div className="sub-title">384,400 km Est.</div>
          <div className="sub-title">travel time </div>
          <div className="sub-title">3 days</div>
        </SectionContainer>
      </StlSection>
    </>
  );
};

export default Destination;
