import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/Landing";
import CompanyHome from "../pages/Company";
import ProfileEdit from "../pages/ProfileEdit";
// import Pitch from "../components/Pitch";
import ProfilePage from "../pages/Profile";
// import Investors from "../components/Investors";
import { RouteObject } from "../types/types";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Landing />,
    exact: true,
  },
  {
    path: "/company/:slug",
    element: <CompanyHome />,
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
