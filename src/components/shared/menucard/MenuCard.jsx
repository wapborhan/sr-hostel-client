const MenuCard = ({ menu }) => {
  const { _id, meal_title, price, description } = menu;
  console.log(menu);
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
          <div className="desc">
            <h2 className="card-title">{meal_title}</h2>
            <p>{description}</p>
          </div>
          <div className="price">
            <span>${price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
