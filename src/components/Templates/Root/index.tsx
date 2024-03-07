import { Outlet } from "react-router-dom";

import { useAppSelector } from "../../../store/hooks";

import Header from "../../Organisms/Header";
import Aside from "../../Organisms/Aside";

const Root = () => {
  const isOpen = useAppSelector(state => state.menu.isOpen)
  return (
    <>
      <Header />
      <Aside isOpen={isOpen} />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
