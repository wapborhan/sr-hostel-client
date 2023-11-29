import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import usePricing from "../../../hooks/usePricing";
import useAdmin from "../../../hooks/useAdmin";
import { useNavigate } from "react-router-dom";

const PaymentForm = ({ userPackage }) => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [priceData] = usePricing(userPackage);
  const [isAdmin] = useAdmin();
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure
      .post("/payment-intent", { subscription: priceData?.price })
      .then((res) => {
        // console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
  }, [axiosSecure, priceData?.price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);

        // now save the payment in the database
        const payment = {
          email: user.email,
          price: priceData?.price,
          subscription: priceData?.path,
          transactionId: paymentIntent.id,
          date: new Date(), // utc date convert. use moment js to
          status: "pending",
        };

        const res = await axiosSecure.post("/payments", payment);
        console.log("payment saved", res);
        // refetch();

        if (res.status === 200) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thank you for Purchase Plans",
            showConfirmButton: false,
            timer: 1500,
          });
          {
            user && isAdmin
              ? navigate("/dashboard/userProfile")
              : navigate("/dashboard/adminProfile");
          }
        }
      }
    }
  };

  return (
    <div className="w-full mx-auto bg-prime shadow-xl rounded-3xl ">
      <div className=" mx-auto p-10">
        <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  iconColor: "#000",
                  color: "#fff",
                  fontWeight: "500",
                  fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
                  fontSize: "16px",
                  fontSmoothing: "antialiased",
                  ":-webkit-autofill": {
                    color: "#fce883",
                  },
                  "::placeholder": {
                    color: "#000",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <button
            className="btn btn-sm btn-primary my-4"
            type="submit"
            disabled={!stripe || !clientSecret}
          >
            Pay
          </button>
          <p className="text-red-600">{error}</p>
          {transactionId && (
            <p className="text-green-600">
              Your transaction id: {transactionId}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
