import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/Landing";

interface RouteObject {
  path: string;
  element: JSX.Element;
  children?: RouteObject[];
}

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Landing />,
  },
];

const router = createBrowserRouter(routes);

export default router;
