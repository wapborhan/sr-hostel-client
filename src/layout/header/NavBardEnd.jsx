import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAdmin from "../../hooks/useAdmin";

const NavBardEnd = () => {
  const { user, logOut } = useAuth();
  const [isAdmin] = useAdmin();
  const navigate = useNavigate();

  const handleSignOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.error(error);
      });
    navigate("/");
  };
  return (
    <>
      {user ? (
        <>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="U" src={user?.photoURL} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black bg-opacity-70 rounded-box w-52"
            >
              <li>
                <div className="justify-center hover:cursor-default py-3 mb-3 border-b-2 rounded-none">
                  {user?.displayName}
                </div>
              </li>
              {user && isAdmin && (
                <li>
                  <NavLink to="/dashboard/adminProfile">Dashboard</NavLink>
                </li>
              )}
              {user && !isAdmin && (
                <li>
                  <NavLink to="/dashboard/userProfile">Dashboard</NavLink>
                </li>
              )}
              <li>
                <a onClick={handleSignOut}>Logout</a>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <>
          <NavLink to="signup" className="btn btn-outline btn-success">
            Join Us
          </NavLink>
        </>
      )}
    </>
  );
};

export default NavBardEnd;
