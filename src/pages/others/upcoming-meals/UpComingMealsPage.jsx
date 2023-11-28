import UpMenuCard from "../../../components/shared/menucard/UpMenuCard";
import SectionCover from "../../../components/shared/section-cover/SectionCover";
import useUpMeals from "../../../hooks/useUpMeals";

const UpComingMealsPage = () => {
  const [upMeals] = useUpMeals();

  return (
    <div>
      <SectionCover title="Upcoming Meals" />
      <div className="menu-bg bg-fixed bg-no-repeat bg-cover text-white pt-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-5 pb-10">
            {upMeals?.map((item, idx) => {
              return <UpMenuCard key={idx} menu={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpComingMealsPage;
