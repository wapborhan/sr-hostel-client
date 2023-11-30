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
import PrivateRoute from "./PrivateRoute";
import AdminRoutes from "./AdminRoute";
import ChekOut from "../components/shared/checkout/ChekOut";
import UpdateMeals from "../pages/dashboard/update-meals/UpdateMeals";

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

      {
        path: "/checkout/:userPackage",
        element: (
          <PrivateRoute>
            <ChekOut />
          </PrivateRoute>
        ),
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
        element: (
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "reqMeals",
        element: (
          <PrivateRoute>
            <ReqMeals />
          </PrivateRoute>
        ),
      },
      // Admin Routes
      {
        path: "adminProfile",
        element: (
          <AdminRoutes>
            <UserProfile />
          </AdminRoutes>
        ),
      },
      {
        path: "users",
        element: (
          <AdminRoutes>
            <ManageUsers />
          </AdminRoutes>
        ),
      },
      {
        path: "addMeal",
        element: (
          <AdminRoutes>
            <AddMeal />
          </AdminRoutes>
        ),
      },
      {
        path: "allMeals",
        element: (
          <AdminRoutes>
            <AllMeals />
          </AdminRoutes>
        ),
      },
      {
        path: "allMeals/update/:id",
        element: <UpdateMeals />,
        loader: ({ params }) =>
          fetch(`http://localhost:3300/menu/${params.id}`),
      },
      {
        path: "serveMeals",
        element: (
          <AdminRoutes>
            <ServeMeals />
          </AdminRoutes>
        ),
      },
      {
        path: "upcomingMeals",
        element: (
          <AdminRoutes>
            <UpcomingMeals />
          </AdminRoutes>
        ),
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
