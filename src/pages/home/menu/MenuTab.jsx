import MenuCard from "../../../components/shared/menucard/MenuCard";

const MenuTab = ({ items }) => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 pb-10">
      {items?.map((item, idx) => {
        return <MenuCard key={idx} menu={item} />;
      })}
    </div>
  );
};

export default MenuTab;
