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

  hr {
    margin-top: -0.2rem;
    border-color: ${colors.charcoal};
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.625rem;
    margin: 2rem 0;
  }    
`;


const ArticleImage = styled.div`
    width: 14.125rem;
    height: 15.938rem;
    margin: 0 auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

`;

const Titles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem 0;
  
  h4 {
    opacity: 0.5;
  }

`;


export { Article, ArticleHeader, ArticleImage, Titles }