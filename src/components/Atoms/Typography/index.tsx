import type React from "react";
import { StlH1, StlH2, StlH3, StlH4, StlH5, StlLink } from "./styles";

interface ITypographyLinkProps {
  to: string ;
  children: React.ReactNode;
}

interface ITypographyProps {
  children: React.ReactNode;
}

const TypographyH1: React.FC<ITypographyProps> = ({ children }) => {
  return <StlH1>{children}</StlH1>;
};

const TypographyH2: React.FC<ITypographyProps> = ({ children }) => {
  return <StlH2>{children}</StlH2>;
};

const TypographyH3: React.FC<ITypographyProps> = ({ children }) => {
  return <StlH3>{children}</StlH3>;
};

const TypographyH4: React.FC<ITypographyProps> = ({ children }) => {
  return <StlH4>{children}</StlH4>;
};

const TypographyH5: React.FC<ITypographyProps> = ({ children }) => {
  return <StlH5>{children}</StlH5>;
};

const TypographyLink: React.FC<ITypographyLinkProps> = ({ children, to }) => {
  return <StlLink to={to} >{children}</StlLink>;
};

export { TypographyH1, TypographyH2, TypographyH3, TypographyH4, TypographyH5, TypographyLink };
