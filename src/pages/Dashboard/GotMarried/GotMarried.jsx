
import { useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

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
        withCredentials: true,
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
    <div>
      <SectionTitle heading={"Submit Your Success Story"} subHeading={"Creating a Share Your Story"}/>
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-10 p-6">
        <h2 className="text-2xl font-bold text-center py-4">Got Married</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Self Biodata ID:</label>
            <input
              type="text"
              value={selfBiodataId}
              onChange={(e) => setSelfBiodataId(e.target.value)}
              required
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#FF6F61]"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Partner Biodata ID:</label>
            <input
              type="text"
              value={partnerBiodataId}
              onChange={(e) => setPartnerBiodataId(e.target.value)}
              required
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#FF6F61]"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Couple Image URL:</label>
            <input
              type="text"
              value={coupleImageUrl}
              onChange={(e) => setCoupleImageUrl(e.target.value)}
              required
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#FF6F61]"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Success Story:</label>
            <textarea
              value={successStory}
              onChange={(e) => setSuccessStory(e.target.value)}
              required
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#FF6F61]"
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Marriage Date:</label>
            <input
              type="date"
              value={marriageDate}
              onChange={(e) => setMarriageDate(e.target.value)}
              required
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#FF6F61]"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Review:</label>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <label key={star} className="flex items-center">
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
          <button type="submit" className="w-full py-2 bg-[#FF6F61] text-white rounded-md font-semibold hover:bg-[#e66558] focus:outline-none focus:ring-2 focus:ring-[#FF6F61]">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default GotMarried;
