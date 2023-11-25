import Header from "../layout/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../layout/footer/Footer";
const Root = () => {
  return (
    <div className="relative">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
