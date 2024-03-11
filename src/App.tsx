import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Root from "./components/Templates/Root";
import Home from "./components/Templates/Home";
import GlobalStyle from "./components/Global";
import Destination from "./components/Templates/Destination";
import Crew from "./components/Templates/Crew";
import Technology from "./components/Templates/Technology";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="destinations" element={<Destination />} />
      <Route path="crew" element={<Crew />} />
      <Route path="technology" element={<Technology />} />
    </Route>
  )
);

const App = () => {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
