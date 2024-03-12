import { useNavigate } from "react-router-dom";
import { H1, H5 } from "../../Atoms";
import { Button } from "../../Atoms/Button";
import { SectionContainer, StlSection } from "./styles";

const Home = () => {
  const navigate = useNavigate();
  function handleNavigate() {
    navigate("/destinations");
  }

  return (
    <>
      <StlSection>
        <SectionContainer>
          <article>
            <H5>So, you want to travel to</H5>
            <H1>Space</H1>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </article>

          <Button type="button" className="secondary" onClick={handleNavigate}>
            Explore
          </Button>
        </SectionContainer>
      </StlSection>
    </>
  );
};

export default Home;
