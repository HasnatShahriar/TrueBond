import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const BiodataDetails = () => {
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();

  const [biodata, setBiodata] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBiodata = async () => {
      try {
        const res = await axiosPublic.get(`/biodatas/${id}`);
        setBiodata(res.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBiodata();
    }
  }, [id, axiosPublic]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching biodata details: {error.message}</div>;
  }

  return (
    <div className="flex flex-col items-center m-5 font-sans">
      <h2 className="text-2xl font-bold mb-4">Biodata Details</h2>
      <div className="max-w-xl w-full bg-white rounded-lg shadow-md overflow-hidden">
        <img src={biodata.profileImageUrl} alt={`${biodata.name}'s profile`} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{biodata.name}</h3>
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
          <p className="text-gray-700"><strong>Contact Email:</strong> <a href={`mailto:${biodata.contactEmail}`} className="text-blue-500">{biodata.contactEmail}</a></p>
          <p className="text-gray-700"><strong>Mobile Number:</strong> <a href={`tel:${biodata.mobileNumber}`} className="text-blue-500">{biodata.mobileNumber}</a></p>
        </div>
      </div>
    </div>
  );
};

export default BiodataDetails;


