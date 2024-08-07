import { RouterProvider } from "react-router-dom";
import router from "./router";

export default function GlobalRouterProvider() {
  return <RouterProvider router={router} />;
}
