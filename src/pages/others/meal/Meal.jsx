import SectionTitle from "../../../components/shared/section-title/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MenuTab from "../../../pages/home/menu/MenuTab";
import SectionCover from "../../../components/shared/section-cover/SectionCover";

const Meal = () => {
  const [menu] = useMenu();

  const breakfast = menu.filter((item) => item.meal_category === "breakfast");
  const lunch = menu.filter((item) => item.meal_category === "lunch");
  const dinner = menu.filter((item) => item.meal_category === "dinner");
  return (
    <>
      <SectionCover title="Chef Recommends Menu" />
      <div className="menu-bg bg-fixed bg-no-repeat bg-cover text-white pt-8">
        <div className="max-w-7xl mx-auto">
          <Tabs>
            <TabList>
              <Tab key="all"> All Meals</Tab>
              <Tab>Breakfast</Tab>
              <Tab>Lunch</Tab>
              <Tab>Dinner</Tab>
            </TabList>
            <TabPanel key="all">
              <MenuTab items={menu}></MenuTab>
            </TabPanel>
            <TabPanel>
              <MenuTab items={breakfast}></MenuTab>
            </TabPanel>
            <TabPanel>
              <MenuTab items={lunch}></MenuTab>
            </TabPanel>
            <TabPanel>
              <MenuTab items={dinner}></MenuTab>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Meal;
