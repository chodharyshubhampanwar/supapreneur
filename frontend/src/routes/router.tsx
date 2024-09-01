import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/Landing";
import CompanyDetails from "../pages/Company";
import ProfileEdit from "../pages/ProfileEdit";
import Pitch from "../components/Pitch";
import About from "../components/About";
import ProfilePage from "../pages/Profile";
import Investors from "../components/investors";

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
    path: "/investors",
    element: <Investors />,
  },
  {
    path: "/company/:slug",
    element: <CompanyDetails />,
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
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/profile/edit",
    element: <ProfileEdit />,
  },
];

const router = createBrowserRouter(routes);

export default router;
