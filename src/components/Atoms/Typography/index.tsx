import type React from "react";
import { StlH1, StlH2, StlH3, StlH4, StlH5, StlLink, StlSubH1, StlSubH2 } from "./styles";

interface ITypographyLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
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

const TypographySubH1: React.FC<ITypographyProps> = ({ children }) => {
  return <StlSubH1>{children}</StlSubH1>;
};

const TypographySubH2: React.FC<ITypographyProps> = ({ children }) => {
  return <StlSubH2>{children}</StlSubH2>;
};

const TypographyLink: React.FC<ITypographyLinkProps> = ({ children, to, onClick }) => {
  return <StlLink to={to} onClick={onClick}>{children}</StlLink>;
};

export {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyH5,
  TypographyLink,
  TypographySubH1,
  TypographySubH2,
};
