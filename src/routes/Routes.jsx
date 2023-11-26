import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import Root from "../layout/Root";
import SignIn from "../pages/others/signin/SignIn";
import SignUp from "../pages/others/signup/SignUp";
import Meal from "../pages/others/meal/Meal";
import MealDetails from "../pages/others/meal/MealDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/meal",
        element: <Meal />,
      },
      {
        path: "/meal/:id",
        element: <MealDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3300/menu/${params.id}`),
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
