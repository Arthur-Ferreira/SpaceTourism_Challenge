import styled from "styled-components";

import { colors } from "../../Global/vars";

const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ArticleHeader = styled.div`
  width: 100%;
  h5 {
    color: ${colors.white};
    padding-bottom: 0.375rem;
    span {
      opacity: 0.3;
    }
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.625rem;
    text-transform: uppercase;
    letter-spacing: 0.148rem;
  }
    
`;

const HeaderImage = styled.div`
  width: 100%;
  max-width: 10.625rem;
  height: 100%;
  max-height: 10.625rem;
  margin: 1.625rem auto;

  img {
    width: 100%;
    height: 100%;
  }

`;

const ArticleBody = styled.div`
  padding-top: 2rem;

  hr {
    margin: 2rem 0;
    border-color: ${colors.charcoal};
  }
`;


const SubHeading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  
  div {
    display: flex;
    flex-direction: column;
    
    gap: 0.75rem;
  }
`;


export { Article, ArticleHeader, HeaderImage, ArticleBody, SubHeading }