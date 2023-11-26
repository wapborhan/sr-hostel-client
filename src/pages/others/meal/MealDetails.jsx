import { useLoaderData } from "react-router-dom";
import SectionCover from "../../../components/shared/section-cover/SectionCover";

const MealDetails = () => {
  const meals = useLoaderData();

  const { meal_title } = meals;

  console.log(meals);
  return (
    <div>
      <SectionCover title={meal_title} />
      MealDetails
    </div>
  );
};

export default MealDetails;
