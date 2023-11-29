import { useParams } from "react-router-dom";
import SectionCover from "../section-cover/SectionCover";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);
const ChekOut = () => {
  const { userPackage } = useParams();

  return (
    <div>
      <SectionCover title={`Selected Package "${userPackage}"`} />
      <Elements stripe={stripePromise}>
        <PaymentForm userPackage={userPackage} />
      </Elements>
    </div>
  );
};

export default ChekOut;
