import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Templates/Home";
import Root from "./components/Templates/Root";
import GlobalStyle from "./components/Global";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "home",
        element: <Home />
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
