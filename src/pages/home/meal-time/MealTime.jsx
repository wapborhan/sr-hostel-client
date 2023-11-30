import SectionTitle from "../../../components/shared/section-title/SectionTitle";
import Table from "./Table";

const data = [
  {
    time: "Breakfast",
  },
  {
    time: "Lunch",
  },
  {
    time: "Dinner",
  },
];

const MealTime = () => {
  return (
    <div className="menu-bg bg-fixed bg-no-repeat bg-cover text-white pt-8 pb-10 mt-20">
      <div className="max-w-7xl lg:mx-auto mx-5">
        <SectionTitle title="When to Eat Meal" />.
        <div className="grid gap-5 lg:grid-cols-3 grid-cols-1">
          {data.map((item, idx) => {
            return <Table key={idx} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MealTime;
