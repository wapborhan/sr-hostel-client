import NavBar from "./NavBar";
import TopBar from "./TopBar";

const Header = () => {
  return (
    <div className="absolute z-10 top-5 inset-x-0 shadow-xl  lg:w-3/4 md:w-2/5 mx-auto">
      <TopBar />
      <NavBar />
    </div>
  );
};

export default Header;
