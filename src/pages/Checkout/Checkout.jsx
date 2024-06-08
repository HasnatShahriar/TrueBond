import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentCheckoutForm from "./PaymentCheckoutForm";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Checkout = () => {
  const { id } = useParams();
  return (
    <div className="flex flex-col items-center p-4 sm:p-6 lg:p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl sm:text-4xl text-center text-gray-800 mb-6">
        You Have To Pay: <span className="text-green-500">$5.00</span>
      </h2>
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <Elements stripe={stripePromise}>
          <PaymentCheckoutForm id={id} />
        </Elements>
      </div>
    </div>
  );
};

export default Checkout;
