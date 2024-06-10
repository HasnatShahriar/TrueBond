import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useState } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const PremiumBiodata = () => {
  const axiosPublic = useAxiosPublic();
  const [sortOrder, setSortOrder] = useState('ascending');

  const { data: biodata = [], isLoading: loading } = useQuery({
    queryKey: ['premiumBiodataCollection', sortOrder],
    queryFn: async () => {
      const res = await axiosPublic.get(`/premium-profiles?sortOrder=${sortOrder}`);
      return res.data;
    },
    keepPreviousData: true,
  });

  if (loading) return <div className="flex items-center justify-center space-x-2">
    <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
    <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
    <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
  </div>;

  // Limit to 6 profiles
  const displayedBiodata = biodata.slice(0, 6);

  return (
    <div>
      <SectionTitle heading={"Meet Our Premium Members"} subHeading={"Discover a Selection of Exclusive Profiles from Our Premium Members"} />
      <div className="p-4">
        <div className="mb-6 text-center">
          <label htmlFor="sortOrder" className="mr-2 text-lg font-semibold">Sort by Age: </label>
          <select
            id="sortOrder"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          >
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {displayedBiodata.map(profile => (
            <div key={profile._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                className="w-48 h-48 rounded-full mx-auto mt-4 object-cover"
                src={profile.profileImageUrl}
                alt={`${profile.name}'s profile`}
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">{profile.name}</h3>
                <p className="text-gray-600">Biodata ID: {profile.biodataId}</p>
                <p className="text-gray-600">Type: {profile.biodataType}</p>
                <p className="text-gray-600">Division: {profile.permanentDivision}</p>
                <p className="text-gray-600">Age: {profile.age}</p>
                <p className="text-gray-600">Occupation: {profile.occupation}</p>
                <Link to={`/biodatas/${profile._id}`}>
                  <button className="mt-4 bg-[#FF6F61] text-white px-4 py-2 rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-600">
                    View Profile
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PremiumBiodata;
