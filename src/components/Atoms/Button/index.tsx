import type React from "react";

import { StlButton, StlDestButton, StlCrewButton, StlTechButton } from "./styles";

interface IButton {
  type: "button" | "reset" | "submit" | undefined;
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<IButton> = ({ type, className, onClick, children }) => {
  return (
    <StlButton type={type} className={className} onClick={onClick}>
      {children}
    </StlButton>
  );
};

const DestButton: React.FC<IButton> = ({ type, onClick, children }) => {
  return (
    <StlDestButton type={type} onClick={onClick}>
      {children}
    </StlDestButton>
  );
};

const CrewButton: React.FC<IButton> = ({ type, onClick }) => {
  return (
    <StlCrewButton type={type} onClick={onClick}>
    </StlCrewButton>
  );
};

const TechButton: React.FC<IButton> = ({ type, onClick, children }) => {
  return (
    <StlTechButton type={type} onClick={onClick}>
      {children}
    </StlTechButton>
  );
};

export { Button, DestButton, CrewButton, TechButton };
