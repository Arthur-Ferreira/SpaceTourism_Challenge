import type React from "react";

import StlButton from "./styles";

interface IButton {
  type: "button" | "reset" | "submit" | undefined;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<IButton> = ({ type, className, onClick,children }) => {
  return <StlButton type={type} className={className} onClick={onClick}>{children}</StlButton>;
};

export default Button;