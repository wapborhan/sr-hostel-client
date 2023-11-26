import { NavLink } from "react-router-dom";

const MenuCard = ({ menu }) => {
  const { _id, meal_title, price, description, rating } = menu;
  return (
    <div className="card w-96 bg-base-100 text-black shadow-xl">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
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
            <NavLink to={`/meal/${_id}`}>
              <button className="btn btn-sm btn-outline btn-warning">
                Details
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
