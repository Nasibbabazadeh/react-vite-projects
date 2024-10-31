import { PathConstants } from "./PathConstants";
import { RouteObject } from "react-router-dom";
import HomePage from "../pages/Home";
import AboutPage from "../pages/About";

const routes: RouteObject[] = [
  { path: PathConstants.HOME, element: <HomePage /> },
  { path: PathConstants.ABOUT, element: <AboutPage /> },
];

export default routes;
