import type React from "react";

import { images } from "../../Global/vars";

import Button from "../../Atoms/Button";
import AsideNav from "../../Molecules/Nav/AsideNav";


import { StlAside, AsideContainer } from "./styles";
import { useAppDispatch } from "../../../store/hooks";
import { close } from "../../../feature/menu/menuSlice";

type TAsideProps = {
  isOpen: boolean;
}

const Aside: React.FC<TAsideProps> = ({ isOpen }) => {
  const dispatch = useAppDispatch()

  if (!isOpen) return null;

  const handleCloseModal = () => {
    dispatch(close())
  }

  return (
    <StlAside>
      <AsideContainer>
        <Button type="button" className="primary" onClick={handleCloseModal}>
          <img src={images.closeIcon} alt="Close Menu" />
        </Button>
        <AsideNav />
      </AsideContainer>
    </StlAside>
  );
};

export default Aside;
