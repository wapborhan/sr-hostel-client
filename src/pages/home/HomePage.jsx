import About from "./about/About";
import Banner from "./banner/Banner";
import MealTime from "./meal-time/MealTime";
import Menu from "./menu/Menu";
import Pricing from "./pricing/Pricing";
import Secret from "./secret/Secret";
import Services from "./services/Services";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Services />
      <About />
      <Menu />
      <Secret />
      <MealTime />
      <Pricing />
    </>
  );
};

export default HomePage;
