import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import useRole from '../../../hooks/useRole';
import toast from 'react-hot-toast';
import useAuth from '../../../hooks/useAuth';

const BiodataDetails = () => {
  const {user} = useAuth();
  const [role] = useRole();
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();
  const [isFavoriteAdded, setIsFavoriteAdded] = useState(false);
  const [favoriteError, setFavoriteError] = useState(null);

  const { data: biodata = {}, isLoading: loading, isError: error } = useQuery({
    queryKey: ['biodataDetails', id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/biodatas/${id}`);
      return res.data;
    }
  });


  const addToFavorites = async () => {
    try {
      await axiosPublic.post('/favorites', { ...biodata, email: user?.email });
      setIsFavoriteAdded(true);
      toast.success('Add to favorites successfully')
    } catch (err) {
      setFavoriteError(err.message);
      toast.success('Already Added to favorites')
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching biodata details: {error.message}</div>;
  }

  return (
    <div className="flex flex-col items-center m-5 font-sans">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Biodata Details</h2>
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={biodata.profileImageUrl} alt={`${biodata.name}'s profile`} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">{biodata.name}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <p className="text-gray-700"><strong>Type:</strong> {biodata.biodataType}</p>
            <p className="text-gray-700"><strong>Date of Birth:</strong> {biodata.dateOfBirth}</p>
            <p className="text-gray-700"><strong>Age:</strong> {biodata.age}</p>
            <p className="text-gray-700"><strong>Height:</strong> {biodata.height} cm</p>
            <p className="text-gray-700"><strong>Weight:</strong> {biodata.weight} kg</p>
            <p className="text-gray-700"><strong>Occupation:</strong> {biodata.occupation}</p>
            <p className="text-gray-700"><strong>Race:</strong> {biodata.race}</p>
            <p className="text-gray-700"><strong>Father's Name:</strong> {biodata.fathersName}</p>
            <p className="text-gray-700"><strong>Mother's Name:</strong> {biodata.mothersName}</p>
            <p className="text-gray-700"><strong>Permanent Division:</strong> {biodata.permanentDivision}</p>
            <p className="text-gray-700"><strong>Present Division:</strong> {biodata.presentDivision}</p>
            <p className="text-gray-700"><strong>Expected Partner Age:</strong> {biodata.expectedPartnerAge}</p>
            <p className="text-gray-700"><strong>Expected Partner Height:</strong> {biodata.expectedPartnerHeight} cm</p>
            <p className="text-gray-700"><strong>Expected Partner Weight:</strong> {biodata.expectedPartnerWeight} kg</p>
          </div>

          {role === 'premium' ? (
            <>
              <p className="text-gray-700">
                <strong>Contact Email:</strong>{' '}
                <a href={`mailto:${biodata.contactEmail}`} className="text-blue-500">{biodata.contactEmail}</a>
              </p>
              <p className="text-gray-700">
                <strong>Mobile Number:</strong>{' '}
                <a href={`tel:${biodata.mobileNumber}`} className="text-blue-500">{biodata.mobileNumber}</a>
              </p>
            </>
          ) : (
            <Link to={`/checkout/${id}`} className="block mt-4">
              <button className="w-full px-3 py-2 bg-[#FF6F61] text-white rounded-md font-semibold hover:bg-[#e66558] focus:outline-none focus:ring-2 focus:ring-[#FF6F61]">
                Request Contact Information
              </button>
            </Link>
          )}

          <button
            className="w-full mt-4 px-3 py-2 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 transform transition duration-300 hover:scale-105"
            onClick={addToFavorites}
            disabled={isFavoriteAdded}
          >
            {isFavoriteAdded ? 'Added to Favorites' : 'Add to Favorites'}
          </button>
          {favoriteError && <p className="text-red-500 mt-2">Already Added</p>}
        </div>
      </div>
    </div>
  );
};

export default BiodataDetails;
