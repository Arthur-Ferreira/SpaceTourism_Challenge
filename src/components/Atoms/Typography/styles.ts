import styled from "styled-components";
import { colors } from "../../Global/vars";
import { Link } from "react-router-dom";

const StlH1 = styled.h1`
  font-size: 9.375rem;
`;

const StlH2 = styled.h2`
  font-size: 6.25rem;
`;

const StlH3 = styled.h3`
  font-size: 3.5rem;
`;

const StlH4 = styled.h4`
  font-size: 2rem;
`;

const StlH5 = styled.h5`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 1.75rem;
  font-weight: 400;
  letter-spacing: 4.75;
  color: ${colors.periwinkle};
`;

const StlLink = styled(Link)`
  font-size: 1rem;
  letter-spacing: 2.7;
`;

export { StlH1, StlH2, StlH3, StlH4, StlH5, StlLink }