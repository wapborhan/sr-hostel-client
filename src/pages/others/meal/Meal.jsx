import useMenu from "../../../hooks/useMenu";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MenuTab from "../../../pages/home/menu/MenuTab";
import SectionCover from "../../../components/shared/section-cover/SectionCover";
import { useState } from "react";

const Meal = () => {
  const [menu] = useMenu();
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [filteredMenu, setFilteredMenu] = useState(menu);

  const handleSearchInputChange = (e) => {
    const input = e.target.value.toLowerCase();
    setSearchInput(input);

    const filteredItems = menu.filter((item) =>
      item.meal_title.toLowerCase().includes(input)
    );
    setFilteredMenu(filteredItems);
  };
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    filterMenu(searchInput, category);
  };
  const filterMenu = (search, category) => {
    // Filter menu based on the search input and selected category
    const filteredItems = menu.filter(
      (item) =>
        item.meal_title.toLowerCase().includes(search) &&
        (category === "all" || item.meal_category === category)
    );
    setFilteredMenu(filteredItems);
  };

  const applyFilters = () => {
    // Filter menu based on the price range
    const filteredItems = menu.filter(
      (item) =>
        (minPrice === "" || parseFloat(item.price) >= parseFloat(minPrice)) &&
        (maxPrice === "" || parseFloat(item.price) <= parseFloat(maxPrice))
    );
    setFilteredMenu(filteredItems);
  };

  return (
    <>
      <SectionCover title="Chef Recommends Menu" />
      <div className="menu-bg bg-fixed bg-no-repeat bg-cover text-white pt-8">
        <div className="search flex gap-5 justify-center mx-auto my-4">
          <input
            type="text"
            placeholder="Search by meal title..."
            value={searchInput}
            className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200  text-black"
            onChange={handleSearchInputChange}
          />
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200 text-black"
          >
            <option value="all">All Categories</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>
          <div className="price-filter">
            <label>
              Min Price:
              <input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200  text-black"
              />
            </label>
            <label>
              Max Price:
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200  text-black"
              />
            </label>
            <button onClick={applyFilters}>Apply Filters</button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto">
          <MenuTab items={filteredMenu}></MenuTab>
        </div>
      </div>
    </>
  );
};

export default Meal;
