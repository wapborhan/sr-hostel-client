import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import Root from "../layout/Root";
import Dash from "../layout/Dash";
import SignIn from "../pages/others/signin/SignIn";
import SignUp from "../pages/others/signup/SignUp";
import Meal from "../pages/others/meal/Meal";
import MealDetails from "../pages/others/meal/MealDetails";
import ManageUsers from "../pages/dashboard/manage-user/ManageUsers";
import AddMeal from "../pages/dashboard/add-meal/AddMeal";
import AllMeals from "../pages/dashboard/all-meals/AllMeals";

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
    path: "/dashboard",
    element: <Dash />,
    children: [
      {
        path: "users",
        element: <ManageUsers />,
      },
      {
        path: "addMeal",
        element: <AddMeal />,
      },
      {
        path: "allMeals",
        element: <AllMeals />,
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
