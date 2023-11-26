import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import Root from "../layout/Root";
import SignIn from "../pages/others/signin/SignIn";
import SignUp from "../pages/others/signup/SignUp";

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
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);
