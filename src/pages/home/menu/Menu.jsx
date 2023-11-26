import SectionTitle from "../../../components/shared/section-title/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import Menucard from "../../../components/shared/menucard/MenuCard";

const Menu = () => {
  const [menu] = useMenu();
  return (
    <div className="menu-bg bg-fixed bg-no-repeat bg-cover text-white pt-8 my-20">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Chef Recommends Menu" />
        <div className="grid grid-cols-3 gap-5 pb-10">
          {menu.map((item, idx) => {
            return <Menucard key={idx} menu={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
