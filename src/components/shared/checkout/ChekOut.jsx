import { useParams } from "react-router-dom";
import SectionCover from "../section-cover/SectionCover";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";
import usePricing from "../../../hooks/usePricing";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);
const ChekOut = () => {
  const { userPackage } = useParams();
  const [priceData] = usePricing();

  return (
    <div>
      <SectionCover title={`Selected Package "${userPackage}"`} />
      <div className="max-w-7xl mx-auto my-8">
        <div className="grid grid-cols-2 gap-5">
          <div
            className={`w-full  p-10 shadow-xl rounded-3xl sm:w-96 lg:w-full  ${priceData?.bgColor}`}
          >
            <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
              <img
                src={priceData?.img}
                alt=""
                className="rounded-3xl w-20 h-20"
              />
              <div className="ml-5">
                <span className="block text-2xl font-semibold">
                  {priceData?.plan_name}
                </span>
                <span>
                  <span className="font-medium text-gray-500 text-xl align-top">
                    $&thinsp;
                  </span>
                  <span className="text-3xl font-bold">
                    {priceData?.price}{" "}
                  </span>
                </span>
                <span className="text-gray-500 font-medium">/ day</span>
              </div>
            </div>
            <ul className="mb-7 font-medium text-gray-500">
              {priceData?.pack_details?.map((item, idx) => {
                return (
                  <li className="flex text-lg mb-2" key={idx}>
                    <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                    <span className="ml-3">{item}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <Elements stripe={stripePromise}>
            <PaymentForm userPackage={userPackage} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default ChekOut;
