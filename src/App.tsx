import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./components/Templates/Home";
import Root from "./components/Templates/Root";
import GlobalStyle from "./components/Global";
import Destination from "./components/Templates/Destination";
import Crew from "./components/Templates/Crew";
import Technology from "./components/Templates/Technology";
import DestinationArticle from "./components/Organisms/CrewArticle";
import CrewArticle from "./components/Organisms/CrewArticle";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="destination" element={<Destination />}>
        <Route path=":name" element={<DestinationArticle />} />
      </Route>
      <Route path="crew" element={<Crew />}>
        <Route path=":name" element={<CrewArticle />} />
      </Route>
      <Route path="technology" element={<Technology />}>
        {/* <Route path=":name" element={<DestinationArticle />} /> */}
      </Route>
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
