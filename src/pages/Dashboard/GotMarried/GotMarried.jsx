

import { useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const GotMarried = () => {
  const axiosPublic = useAxiosPublic();

  const [selfBiodataId, setSelfBiodataId] = useState('');
  const [partnerBiodataId, setPartnerBiodataId] = useState('');
  const [coupleImageUrl, setCoupleImageUrl] = useState('');
  const [successStory, setSuccessStory] = useState('');
  const [marriageDate, setMarriageDate] = useState('');
  const [reviewStar, setReviewStar] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newStory = {
      selfBiodataId,
      partnerBiodataId,
      coupleImageUrl,
      successStory,
      marriageDate,
      reviewStar,
    };

    try {
      const response = await axiosPublic.post('/success-stories', newStory, {
        withCredentials: true, // Include cookies in the request
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Success Story Submitted', response.data);
      if (response.data.insertedId) {
        Swal.fire({
          title: 'Success!',
          text: 'Success Story Submitted Successfully',
          icon: 'success',
          confirmButtonText: 'Cool',
        });
        // Reset the form
        setSelfBiodataId('');
        setPartnerBiodataId('');
        setCoupleImageUrl('');
        setSuccessStory('');
        setMarriageDate('');
        setReviewStar('');
      }
    } catch (error) {
      console.error('Error submitting success story:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <h2 className="text-2xl font-bold text-center py-4">Got Married</h2>
      <form onSubmit={handleSubmit} className="px-6 py-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Self Biodata ID:</label>
          <input
            type="text"
            value={selfBiodataId}
            onChange={(e) => setSelfBiodataId(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Partner Biodata ID:</label>
          <input
            type="text"
            value={partnerBiodataId}
            onChange={(e) => setPartnerBiodataId(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Couple Image URL:</label>
          <input
            type="text"
            value={coupleImageUrl}
            onChange={(e) => setCoupleImageUrl(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Success Story:</label>
          <textarea
            value={successStory}
            onChange={(e) => setSuccessStory(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Marriage Date:</label>
          <input
            value={marriageDate}
            type='date'
            onChange={(e) => setMarriageDate(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Review Star:</label>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <label key={star} className="mr-2">
                <input
                  type="radio"
                  name="reviewStar"
                  value={star}
                  checked={reviewStar === `${star}`}
                  onChange={(e) => setReviewStar(e.target.value)}
                  className="mr-1"
                />
                {star}
              </label>
            ))}
          </div>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
      </form>
    </div>
  );
};

export default GotMarried;
