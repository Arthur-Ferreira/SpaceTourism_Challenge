import { Outlet } from "react-router-dom";
import Header from "../../Organisms/Header";

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Root;