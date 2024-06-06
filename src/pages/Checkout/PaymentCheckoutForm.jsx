

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";

const PaymentCheckoutForm = ({ id }) => {
  const [error, setError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const price = parseInt(5);
  console.log(id);

  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosSecure.post('/create-payment-intent', { price })
      .then(res => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      })
  }, [axiosSecure, price])

  const { data: biodata = {}, isLoading: loading, isError,refetch } = useQuery({
    queryKey: ['biodataDetails1', id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/biodatas/${id}`);
      return res.data;
    }
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching biodata details: {error.message}</div>;
  }

  console.log(biodata);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    });

    if (error) {
      console.log('Payment error', error);
      setError(error.message);
    } else {
      console.log('Payment method', paymentMethod);
      setError('');
    }

    // confirm payment 
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || 'anonymous',
          name: user?.displayName || 'anonymous'
        }
      }
    });

    if (confirmError) {
      console.log('Confirm Error');
      setError(confirmError.message);
    } else {
      console.log('payment intent', paymentIntent);
      if (paymentIntent.status === 'succeeded') {
        console.log('transaction id', paymentIntent.id);
        setTransactionId(paymentIntent.id);

        // now save the payment in the database
        const payment = {
          name: user?.displayName,
          email: user?.email,
          biodataId: biodata?.biodataId,
          status: 'Pending',
          biodataName: biodata?.name,
          biodataMobileNumber: biodata?.mobileNumber,
          biodataEmail: biodata?.contactEmail

        };
        const res = await axiosSecure.post('/payments', payment);
        console.log(res.data);
        refetch();
        if(res.data?.insertedId){
          toast.success('Thank You !!! Your Payment is successful')
        }
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Biodata ID</label>
        <input type="text" value={biodata.biodataId} readOnly className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Self Email</label>
        <input type="email" value={user?.email} readOnly className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Card Information</label>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
        />
      </div>
      <button className="bg-indigo-600 text-white font-semibold my-4 px-4 py-2 rounded-xl w-full hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200" type="submit" disabled={!stripe || !clientSecret}>
        Submit
      </button>
      {error && <p className="text-red-600">{error}</p>}
      {transactionId && <p className="text-green-600">Your Transaction Id: {transactionId}</p>}
    </form>
  );
};

export default PaymentCheckoutForm;
