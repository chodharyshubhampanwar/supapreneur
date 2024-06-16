import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/Landing";
import CompanyHome from "../pages/Company";
import Profile from "../pages/Profile";
import ProfileEdit from "../pages/ProfileEdit";
import Pitch from "../components/Pitch";
import About from "../components/About";

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
  {
    path: "/company/:slug",
    element: <CompanyHome />,
    children: [
      {
        path: "",
        element: <About />,
      },
      {
        path: "pitch",
        element: <Pitch />,
      },
    ],
  },
  {
    path: "/profile/",
    element: <Profile />,
  },
  {
    path: "/profile/edit",
    element: <ProfileEdit />,
  },
];

const router = createBrowserRouter(routes);

export default router;
