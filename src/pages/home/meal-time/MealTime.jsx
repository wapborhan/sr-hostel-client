import SectionTitle from "../../../components/shared/section-title/SectionTitle";
import Table from "./Table";

const MealTime = () => {
  return (
    <div className="menu-bg bg-fixed bg-no-repeat bg-cover text-white pt-8 pb-10 mt-20">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="When to Eat Meal" />.{" "}
        <div className="grid gap-5 grid-cols-3">
          <Table />
          <Table />
          <Table />
        </div>
      </div>
    </div>
  );
};

export default MealTime;
