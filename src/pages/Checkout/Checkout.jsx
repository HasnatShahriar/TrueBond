
// import { useParams } from 'react-router-dom';
// import useAuth from '../../hooks/useAuth';


// const ContactInformationCheckout = () => {
//   const { biodataId } = useParams();

//   const {user} = useAuth();


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission, possibly with an API call
//   };

//   console.log(biodataId);

//   return (
//     <div className="flex flex-col items-center m-5 font-sans">
//       <h2 className="text-2xl font-bold mb-4">Request Contact Information</h2>
//       <form className="max-w-xl w-full bg-white rounded-lg shadow-md overflow-hidden" onSubmit={handleSubmit}>
//         <div className="p-4">
//           <input
//             type="text"
//             className="w-full mb-4 px-3 py-2 border rounded"
//             placeholder="Biodata ID"
//             value={biodataId}
//             readOnly
//           />
//           <input
//             type="email"
//             className="w-full mb-4 px-3 py-2 border rounded"
//             placeholder="Your Email"
//             value={user?.email}
//             required
//             readOnly
//           />
//           <button
//             type="submit"
//             className="px-4 py-2 bg-blue-500 text-white rounded"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ContactInformationCheckout;





import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const ContactInformationCheckout = () => {
  const { biodataId } = useParams();

  const { user } = useAuth();
  const [cardNumber, setCardNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, possibly with an API call
    // Include cardNumber in your form submission payload
  };

  return (
    <div className="flex flex-col items-center m-5 font-sans">
      <h2 className="text-2xl font-bold mb-4">Request Contact Information</h2>
      <form className="max-w-xl w-full bg-white rounded-lg shadow-md overflow-hidden" onSubmit={handleSubmit}>
        <div className="p-4">
          <input
            type="text"
            className="w-full mb-4 px-3 py-2 border rounded"
            placeholder="Biodata ID"
            value={biodataId}
            readOnly
          />
          <input
            type="email"
            className="w-full mb-4 px-3 py-2 border rounded"
            placeholder="Your Email"
            value={user?.email}
            required
            readOnly
          />
          <input
            type="text"
            className="w-full mb-4 px-3 py-2 border rounded"
            placeholder="Stripe Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactInformationCheckout;
