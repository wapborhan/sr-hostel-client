import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import Root from "../layout/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);
