import { NavLink } from "react-router-dom";

const UpMenuCard = ({ menu }) => {
  const { _id, meal_title, price, description, rating, meal_image } = menu;
  return (
    <div className="card lg:w-96 bg-base-100 text-black shadow-xl">
      <figure className="h-48 border-b-2">
        <img src={meal_image} alt={meal_title} />
      </figure>
      <div className="card-body">
        <div className="flex">
          <div className="desc space-y-4">
            <h2 className="card-title">{meal_title}</h2>
            <p>{description}</p>
          </div>
          <div className="price items-center">
            <span>${price}</span>
          </div>
        </div>
        <div className="flex justify-between mt-5">
          <div className="ratings">Ratings : {rating}</div>
          <div className="details text-right">
            {/* <NavLink to={`/meal/${_id}`}>
              <button className="btn btn-sm btn-outline btn-warning">
                Details
              </button>
            </NavLink> */}
            <span className="text-red-600">Coming Soon</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpMenuCard;
