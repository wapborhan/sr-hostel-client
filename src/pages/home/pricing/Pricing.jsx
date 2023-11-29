import { Link } from "react-router-dom";

const priceData = [
  {
    id: 1,
    plan_name: "Silver",
    price: 10,
    path: "silver",
    bgColor: "bg-prime",
    img: "https://res.cloudinary.com/williamsondesign/abstract-1.jpg",
    pack_details: [
      "Daily 2 Times Meals",
      "No Extra Meals",
      "No Extra Protein Food",
    ],
  },
  {
    id: 2,
    plan_name: "Gold",
    price: 24,
    path: "gold",
    bgColor: "bg-second",
    img: "https://res.cloudinary.com/williamsondesign/abstract-2.jpg",
    pack_details: [
      "Daily 3 Times Meals",
      "2 Extra Meals",
      "No Extra Protein Food",
    ],
  },
  {
    id: 3,
    plan_name: "Platinum",
    price: 35,
    path: "platinum",
    bgColor: "bg-prime",
    img: "https://res.cloudinary.com/williamsondesign/abstract-3.jpg",
    pack_details: [
      "Daily 3 Times Meals",
      "3 Extra Meals",
      "1 Glass Milk at Night",
    ],
  },
];

const Pricing = () => {
  return (
    <>
      <main className="max-w-6xl mx-auto pt-10 pb-36 px-8">
        <div className="max-w-md mx-auto mb-14 text-center">
          <h1 className="text-4xl font-semibold font-courgette mb-6 lg:text-5xl">
            <span className="text-prime">Flexible</span> Plans
          </h1>
          <p className="text-xl text-gray-500 font-medium">
            Choose a plan that works best for you and your team.
          </p>
        </div>

        <div className="flex flex-col justify-between gap-5 items-center lg:flex-row lg:items-start">
          {priceData.map((pack, idx) => {
            return (
              <div
                className={`w-full flex-1 mt-8 p-8 order-2  shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-1 ${pack?.bgColor}`}
                key={idx}
              >
                <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
                  <img
                    src={pack?.img}
                    alt=""
                    className="rounded-3xl w-20 h-20"
                  />
                  <div className="ml-5">
                    <span className="block text-2xl font-semibold">
                      {pack?.plan_name}
                    </span>
                    <span>
                      <span className="font-medium text-gray-500 text-xl align-top">
                        $&thinsp;
                      </span>
                      <span className="text-3xl font-bold">{pack?.price} </span>
                    </span>
                    <span className="text-gray-500 font-medium">/ day</span>
                  </div>
                </div>
                <ul className="mb-7 font-medium text-gray-500">
                  {pack?.pack_details.map((item, idx) => {
                    return (
                      <li className="flex text-lg mb-2" key={idx}>
                        <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                        <span className="ml-3">{item}</span>
                      </li>
                    );
                  })}
                </ul>
                <Link
                  to={`/checkout/${pack?.path}`}
                  className="flex justify-center items-center btn btn-outline btn-success rounded-xl px-4 text-center text-white text-xl"
                >
                  Choose Plan
                  <img
                    src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
                    className="ml-2"
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Pricing;
