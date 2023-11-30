import {
  FaAd,
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";

const SideBar = () => {
  const [isAdmin] = useAdmin();

  return (
    <div className="lg:w-64 md:w-64 lg:min-h-screen md:min-h-screen  bg-prime">
      <ul className="menu p-4 sticky top-0">
        <div className="img bg-black rounded-lg mb-8">
          <img src="https://i.ibb.co/cJy2LXX/foot-logo.png" alt="" />
        </div>
        {isAdmin ? (
          <>
            <li>
              <NavLink to="/dashboard/adminProfile">
                <FaHome />
                Admin Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/users">
                <FaUsers></FaUsers>
                Manage Users
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/addMeal">
                <FaUtensils></FaUtensils>
                Add Meal
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/allMeals">
                <FaList></FaList>
                All meals
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/dashboard/allReviews">
                <FaBook></FaBook>
                All reviews
              </NavLink>
            </li> */}
            <li>
              <NavLink to="/dashboard/serveMeals">
                <FaShoppingCart></FaShoppingCart>
                serve meals
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/upcomingMeals">
                <FaList></FaList>
                Upcoming meals
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/dashboard/userProfile">
                <FaHome></FaHome>
                My Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/reqMeals">
                <FaCalendar></FaCalendar>
                Requested Meals
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/myreviews">
                <FaAd></FaAd>
                My Reviews
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default SideBar;
