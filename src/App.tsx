import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Templates/Home";
import Root from "./components/Templates/Root";
import GlobalStyle from "./components/Global";
import Destination from "./components/Templates/Destination";
import Crew from "./components/Templates/Crew";
import Technology from "./components/Templates/Technology";



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
      },
      {
        path: "crew",
        element: <Crew />
      },
      {
        path: "technology",
        element: <Technology />
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
