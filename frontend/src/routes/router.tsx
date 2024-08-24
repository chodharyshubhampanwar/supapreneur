import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/Landing";
import CompanyHome from "../pages/Company";
import ProfileEdit from "../pages/ProfileEdit";
import Pitch from "../components/Pitch";
import About from "../components/About";
import ProfilePage from "../pages/Profile";

interface RouteObject {
  exact?: boolean;
  path: string;
  element: JSX.Element;
  children?: RouteObject[];
}

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Landing />,
    exact: true,
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
    path: "/:username",
    element: <ProfilePage />,
  },
  {
    path: "/profile/edit",
    element: <ProfileEdit />,
  },
];

const router = createBrowserRouter(routes);

export default router;
