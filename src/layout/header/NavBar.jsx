import { NavLink } from "react-router-dom";
import NavBardEnd from "./NavBardEnd";

const NavBar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/">Meals</NavLink>
      </li>
      <li>
        <NavLink to="/">Upcoming Meals</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-black px-5 bg-opacity-70 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="text-xl">SR Hostel</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menus gap-7 menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <NavBardEnd />
      </div>
    </div>
  );
};

export default NavBar;
