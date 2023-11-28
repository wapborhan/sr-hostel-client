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
import UpcomingMeals from "../pages/dashboard/upcoming-meals/UpcomingMeals";
import UpComingMealsPage from "../pages/others/upcoming-meals/UpComingMealsPage";
import ReqMeals from "../pages/dashboard/req-meals/ReqMeals";
import UserProfile from "../pages/dashboard/user-profile/UserProfile";
import ServeMeals from "../pages/dashboard/serv-meals/ServeMeals";

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
        path: "/upcomingmeal",
        element: <UpComingMealsPage />,
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
      // User Routes
      {
        path: "userProfile",
        element: <UserProfile />,
      },
      {
        path: "reqMeals",
        element: <ReqMeals />,
      },
      // Admin Routes
      {
        path: "adminProfile",
        element: <UserProfile />,
      },
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
      {
        path: "serveMeals",
        element: <ServeMeals />,
      },
      {
        path: "upcomingMeals",
        element: <UpcomingMeals />,
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
