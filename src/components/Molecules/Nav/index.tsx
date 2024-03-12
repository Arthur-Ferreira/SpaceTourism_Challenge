import React from "react";
import { StlNav, List } from "./styles";

interface INav {
  children: React.ReactNode;
}

const Nav: React.FC<INav> = ({ children }) => {
  return (
    <StlNav>
      <List>{children}</List>
    </StlNav>
  );
};

export default Nav;
