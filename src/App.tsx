import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Templates/Home";
import Root from "./components/Templates/Root";
import GlobalStyle from "./components/Global";
import Destination from "./components/Templates/Destination";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "home",
        element: <Home />
      },
      {
        path: "destination",
        element: <Destination />
      }
    ]

  },
]);

const App = () => {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
