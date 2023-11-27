import SideBar from "./sidebar/SideBar";
import { Outlet } from "react-router-dom";
import NavBar from "./header/NavBar";

const Dash = () => {
  return (
    <div className="flex lg:flex-row md:flex-row flex-col">
      {/* dashboard side bar */}
      <SideBar />
      {/* dashboard content */}
      <div className="flex-1">
        <div className="bg-prime mb-10">
          <NavBar />
        </div>
        <div className="px-8">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dash;
