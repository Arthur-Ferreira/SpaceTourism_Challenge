import styled from "styled-components";
import { colors } from "../../Global/vars";
import { Link } from "react-router-dom";

const StlH1 = styled.h1`
  font-size: 5rem;
  margin: 1rem 0;

  /* font-size: 9.375rem; */
`;

const StlH2 = styled.h2`
  font-size: 3.5rem;
  /* font-size: 6.25rem; */
`;

const StlH3 = styled.h3`
  font-size: 1.5rem;

  /* font-size: 3.5rem; */
`;

const StlH4 = styled.h4`
  font-size: 1rem;

  /* font-size: 2rem; */
`;

const StlH5 = styled.h5`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.169rem;
  color: ${colors.periwinkle};
  text-transform: uppercase;
  
  /* font-size: 1.75rem; */
  /* letter-spacing: 0.295rem; */
`;

const StlSubH1 = styled.div`
  font-family: "Bellefair", serif;
  font-size: 1.75rem;
  text-transform: uppercase;
`;

const StlSubH2 = styled.div`
  font-family: "Barlow Condensed", sans-serif;
  color: ${colors.periwinkle};
  font-size: 0.875rem;
  letter-spacing: 0.147rem;
  text-transform: uppercase;
`;

const StlLink = styled(Link)`
  font-size: 1rem;
  letter-spacing: 0.169rem;
`;

export { StlH1, StlH2, StlH3, StlH4, StlH5, StlLink, StlSubH1, StlSubH2 }