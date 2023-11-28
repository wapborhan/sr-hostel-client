import { useLoaderData } from "react-router-dom";
import SectionCover from "../../../components/shared/section-cover/SectionCover";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const MealDetails = () => {
  const { user } = useAuth();
  const meals = useLoaderData();
  const {
    meal_title,
    description,
    meal_category,
    rating,
    price,
    distributor_name,
    ingredients,
    likes_count,
    meal_image,
  } = meals;

  // console.log(meals);

  const handleRequestMeals = (meals) => {
    console.log("CLicked", meals);
  };

  const handleLoginFrist = () => {
    Swal.fire({
      icon: "error",
      title: "You Must Login Frist",
      footer: '<a href="/signin">Go to Login Page</a>',
    });
  };
  return (
    <div>
      <SectionCover title={meal_title} />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-5 my-8 gap-6">
          <div className="col-span-3">
            <div className="image mb-5">
              <img src={meal_image} alt="" className="rounded-md h-52 w-full" />
            </div>

            <div className="ing">
              <h2 className="font-bold">Ingredients</h2>
              <ul>
                {ingredients.map((ing, idx) => {
                  return (
                    <li key={idx}>
                      {"=> "}
                      {ing}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="desc mt-5">{description}</div>
          </div>
          <div className="col-span-2">
            <div className="desc space-y-3">
              <h2 className="text-3xl font-courgette">{meal_title}</h2>
              <h3>
                Distributor Name: <b>{distributor_name}</b>
              </h3>
              <h2>
                Category: <b>{meal_category}</b>
              </h2>
              <h4 className="rate">Price: {price}</h4>
              <div className="flex gap-32">
                <h4 className="rate">Ratings: {rating}</h4>
                <div className="like">
                  <button className="btn btn-outline btn-warning btn-sm">
                    Like: {likes_count}
                  </button>
                </div>
              </div>
              <h4 className="rate">Post Time: 12 Jul</h4>
              {user ? (
                <>
                  <button
                    onClick={() => handleRequestMeals(meals)}
                    className="btn btn-outline btn-warning w-full"
                  >
                    Meal request
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={handleLoginFrist}
                    className="btn btn-outline btn-warning w-full"
                  >
                    Meal request
                  </button>
                </>
              )}

              <div className="reviews">reviews (5)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealDetails;
