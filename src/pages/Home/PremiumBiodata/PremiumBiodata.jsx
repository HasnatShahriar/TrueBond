import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useState } from "react";
import { Link } from "react-router-dom";

const PremiumBiodata = () => {
  const axiosPublic = useAxiosPublic();
  const [sortOrder, setSortOrder] = useState('ascending');

  const { data: biodata = [], isLoading: loading } = useQuery({
    queryKey: ['premiumBiodataCollection', sortOrder],
    queryFn: async () => {
      const res = await axiosPublic.get(`/premium-profiles?sortOrder=${sortOrder}`);
      return res.data;
    },
    keepPreviousData: true, // Keeps the previous data while fetching new data
  });

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <div className="mb-4">
        <label htmlFor="sortOrder" className="mr-2">Sort by Age: </label>
        <select id="sortOrder" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="p-2 border border-gray-300 rounded">
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {biodata.map(profile => (
          <div key={profile._id} className="bg-white rounded-lg shadow-md p-4">
            <img className="w-20 h-20 rounded-full mx-auto mb-4" src={profile.profileImageUrl} alt={`${profile.name}'s profile`} />
            <div className="text-center">
              <h3 className="text-xl font-semibold">{profile.name}</h3>
              <p className="text-gray-600">Biodata ID: {profile.biodataId}</p>
              <p className="text-gray-600">Type: {profile.biodataType}</p>
              <p className="text-gray-600">Division: {profile.permanentDivision}</p>
              <p className="text-gray-600">Age: {profile.age}</p>
              <p className="text-gray-600">Occupation: {profile.occupation}</p>
              <Link to={`/biodatas/${profile._id}`}><button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none">View Profile</button></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PremiumBiodata;


