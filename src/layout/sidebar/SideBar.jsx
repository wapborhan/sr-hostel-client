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
// import useCart from "../../hooks/useCart";
// import useAdmin from "../../hooks/useAdmin";

const SideBar = () => {
  // const [cart] = useCart();
  // const [isAdmin] = useAdmin();
  // console.log(isAdmin);
  const isAdmin = true;
  return (
    <div className="lg:w-64 md:w-64 lg:min-h-screen md:min-h-screen  bg-prime">
      <ul className="menu p-4 sticky top-0">
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
            <li>
              <NavLink to="/dashboard/allReviews">
                <FaBook></FaBook>
                All reviews
              </NavLink>
            </li>
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
              <NavLink to="/dashboard/cart">
                <FaAd></FaAd>
                My Reviews
              </NavLink>
            </li>
          </>
        )}
        {/* shared nav links */}
        <div className="divider"></div>
        <li>
          <NavLink to="/">
            <FaHome></FaHome>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/order/salad">
            <FaSearch></FaSearch>
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink to="/order/contact">
            <FaEnvelope></FaEnvelope>
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;