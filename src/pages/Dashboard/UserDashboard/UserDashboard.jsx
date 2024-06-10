import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom"; 
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const UserDashboard = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const { data: biodata = [], isLoading: loading, isError: error } = useQuery({
    queryKey: user?.email ? ["userDashboard", user?.email] : [],
    queryFn: async () => {
      const res = await axiosPublic.get(`/myBiodata/${user?.email}`);
      return res.data;
    },
    enabled: !!user,
  });

  if (loading) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-4">Error fetching biodata details: {error.message}</div>;
  }

  return (
    <div className="p-5 min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6 sm:p-8">
          {biodata.length > 0 ? (
            biodata.map(item => (
              <div key={item._id} className="flex flex-col items-center sm:flex-row mt-5 bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition-shadow duration-300 gap-6">
                <img src={item?.profileImageUrl} alt="Profile" className="w-full sm:w-96 h-96 rounded-t-lg object-cover" />
                <div className="text-center sm:text-left w-full">
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#e66558]">Welcome, {item?.name}!</h2>
                  <p className="text-lg text-gray-600 mt-2"><strong>Biodata ID:</strong> {item?.biodataId}</p>
                  <p className="text-lg text-gray-600 mt-1"><strong>Age:</strong> {item?.age}</p>
                  <p className="text-lg text-gray-600 mt-1"><strong>Father Name:</strong> {item?.fathersName}</p>
                  <p className="text-lg text-gray-600 mt-1"><strong>Mother Name:</strong> {item?.mothersName}</p>
                  <p className="text-lg text-gray-600 mt-1"><strong>Occupation:</strong> {item?.occupation}</p>
                  <p className="text-lg text-gray-600 mt-1"><strong>Email:</strong> {item?.contactEmail}</p>
                  <p className="text-lg text-gray-600 mt-1"><strong>Mobile Number:</strong> {item?.mobileNumber}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center">
              <p className="text-xl text-gray-700">You have not created your biodata yet.</p>
            </div>
          )}
          <div className="text-center mt-4">
            <Link to="/dashboard/editBiodata">
              <button className="mt-4 px-6 py-2 bg-[#e66558] text-white text-lg font-semibold rounded-lg shadow-md hover:bg-[#cc5348] transition-colors duration-300">
                Create/Edit Biodata
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
