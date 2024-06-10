



import { useParams, Link } from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import useRole from '../../../hooks/useRole';
import toast from 'react-hot-toast';
import useAuth from '../../../hooks/useAuth';
import { useState } from 'react';

const BiodataDetails = () => {
  const { user } = useAuth();
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

  const { data: similarBiodata = [] } = useQuery({
    queryKey: ['similarBiodata', id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/biodatas/${id}/similar`);
      return res.data;
    },
    enabled: !!biodata.biodataType,
  });

  const addToFavorites = async () => {
    try {
      await axiosPublic.post('/favorites', { ...biodata, email: user?.email });
      setIsFavoriteAdded(true);
      toast.success('Added to favorites successfully');
    } catch (err) {
      setFavoriteError(err.message);
      toast.error('Failed to add to favorites');
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
      {/* Main Biodata Details */}
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden md:flex">
        <img
          src={biodata.profileImageUrl}
          alt={`${biodata.name}'s profile`}
          className="w-32 h-32 rounded-full mx-auto mt-4 object-cover md:w-1/3 md:h-auto md:rounded-l-none md:rounded-tr-lg"
        />
        <div className="p-6 md:w-2/3">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">{biodata.name}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <p className="text-gray-700"><span className="font-semibold">Type:</span> {biodata.biodataType}</p>
            <p className="text-gray-700"><span className="font-semibold">Date of Birth:</span> {biodata.dateOfBirth}</p>
            <p className="text-gray-700"><span className="font-semibold">Age:</span> {biodata.age}</p>
            <p className="text-gray-700"><span className="font-semibold">Height:</span> {biodata.height} cm</p>
            <p className="text-gray-700"><span className="font-semibold">Weight:</span> {biodata.weight} kg</p>
            <p className="text-gray-700"><span className="font-semibold">Occupation:</span> {biodata.occupation}</p>
            <p className="text-gray-700"><span className="font-semibold">Race:</span> {biodata.race}</p>
            <p className="text-gray-700"><span className="font-semibold">Father's Name:</span> {biodata.fathersName}</p>
            <p className="text-gray-700"><span className="font-semibold">Mother's Name:</span> {biodata.mothersName}</p>
            <p className="text-gray-700"><span className="font-semibold">Permanent Division:</span> {biodata.permanentDivision}</p>
            <p className="text-gray-700"><span className="font-semibold">Present Division:</span> {biodata.presentDivision}</p>
            <p className="text-gray-700"><span className="font-semibold">Expected Partner Age:</span> {biodata.expectedPartnerAge}</p>
            <p className="text-gray-700"><span className="font-semibold">Expected Partner Height:</span> {biodata.expectedPartnerHeight} cm</p>
            <p className="text-gray-700"><span className="font-semibold">Expected Partner Weight:</span> {biodata.expectedPartnerWeight} kg</p>
          </div>

          {/* Premium details or Request Contact */}
          {role === 'premium' ? (
            <>
              <p className="text-gray-700"><strong>Contact Email:</strong> <a href={`mailto:${biodata.contactEmail}`} className="text-blue-500">{biodata.contactEmail}</a></p>
              <p className="text-gray-700"><strong>Mobile Number:</strong> <a href={`tel:${biodata.mobileNumber}`} className="text-blue-500">{biodata.mobileNumber}</a></p>
            </>
          ) : (
            <Link to={`/checkout/${id}`} className="block mt-4">
              <button className="w-full px-3 py-2 bg-[#FF6F61] text-white rounded-md font-semibold hover:bg-[#e66558] focus:outline-none focus:ring-2 focus:ring-[#FF6F61]">
                Request Contact Information
              </button>
            </Link>
          )}

          {/* Add to Favorites */}
          <button
            className="w-full mt-4 px-3 py-2 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 transform transition duration-300 hover:scale-105"
            onClick={addToFavorites}
            disabled={isFavoriteAdded}
          >
            {isFavoriteAdded ? 'Added to Favorites' : 'Add to Favorites'}
          </button>
          {favoriteError && <p className="text-red-500 mt-2">{favoriteError}</p>}
        </div>
      </div>

      {/* Similar Biodata */}
      <div className="mt-8 w-full max-w-4xl">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Similar Biodata</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {similarBiodata.slice(0, 3).map(similar => (
            <div key={similar._id} className="bg-white border-2 rounded-lg shadow-lg p-4 flex flex-col items-center">
              <img
                src={similar.profileImageUrl}
                alt={`${similar.name}'s profile`}
                className="w-24 h-24 rounded-full mb-2 object-cover"
              />
              <div>
                <h4 className="text-xl font-semibold mb-1 text-gray-800">{similar.name}</h4>
                <p className="text-gray-700"><span className="font-semibold">Type:</span> {similar.biodataType}</p>
            <p className="text-gray-700"><span className="font-semibold">Date of Birth:</span> {similar.dateOfBirth}</p>
            <p className="text-gray-700"><span className="font-semibold">Age:</span> {similar.age}</p>
            <p className="text-gray-700"><span className="font-semibold">Height:</span> {similar.height} cm</p>
            <p className="text-gray-700"><span className="font-semibold">Weight:</span> {similar.weight} kg</p>
            <p className="text-gray-700"><span className="font-semibold">Occupation:</span> {similar.occupation}</p>
            <p className="text-gray-700"><span className="font-semibold">Race:</span> {similar.race}</p>
            <p className="text-gray-700"><span className="font-semibold">Father's Name:</span> {similar.fathersName}</p>
            <p className="text-gray-700"><span className="font-semibold">Mother's Name:</span> {similar.mothersName}</p>
            <p className="text-gray-700"><span className="font-semibold">Permanent Division:</span> {similar.permanentDivision}</p>
            <p className="text-gray-700"><span className="font-semibold">Present Division:</span> {similar.presentDivision}</p>
            <p className="text-gray-700"><span className="font-semibold">Expected Partner Age:</span> {similar.expectedPartnerAge}</p>
            <p className="text-gray-700"><span className="font-semibold">Expected Partner Height:</span> {similar.expectedPartnerHeight} cm</p>
            <p className="text-gray-700"><span className="font-semibold">Expected Partner Weight:</span> {similar.expectedPartnerWeight} kg</p>
              </div>
              <Link to={`/biodatas/${similar._id}`} className="mt-2 text-blue-500">View Details</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BiodataDetails;
