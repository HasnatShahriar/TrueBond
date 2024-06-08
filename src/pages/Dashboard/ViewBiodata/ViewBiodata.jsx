import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useState } from "react";
import PremiumRequestModal from "../../../components/Modal/PremiumRequestModal";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const ViewBiodata = () => {
  const axiosSecure = useAxiosSecure();
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const closeModal = () => setIsOpen(false);

  const modalHandler = async () => {
    console.log('I want to be premium !!!');
    closeModal();
    try {
      const currentUser = {
        email: user?.email,
        role: 'normal',
        status: 'Requested for Premium',
      };
      const { data } = await axiosSecure.put(`http://localhost:5000/user`, currentUser);
      console.log(data);
      if (data.modifiedCount > 0) {
        toast.success("Success! Please Wait for Admin Approval");
      } else {
        toast.success("Please!!!, Wait for Admin Approval");
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      closeModal();
    }
  };

  const { data: biodata = [], isLoading: loading, isError: error } = useQuery({
    queryKey: user?.email ? ["viewBiodata", user.email] : [],
    queryFn: async () => {
      const res = await axiosPublic.get(`/myBiodata/${user.email}`);
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {user?.email && biodata.length > 0 ? (
        biodata.map((data, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <img src={data.profileImageUrl} alt="Profile Image" className="w-32 h-32 object-cover rounded-full" />
              <div>
                <h2 className="text-xl font-semibold text-gray-800">{data.biodataType}</h2>
                <p className="text-sm text-gray-600">{data.occupation}</p>
              </div>
            </div>
            <div>
              <p><strong>Date of Birth:</strong> {data.dateOfBirth}</p>
              <p><strong>Age:</strong> {data.age}</p>
              <p><strong>Height:</strong> {data.height} cm</p>
              <p><strong>Weight:</strong> {data.weight} kg</p>
              <p><strong>Race:</strong> {data.race}</p>
              <p><strong>Father's Name:</strong> {data.fathersName}</p>
              <p><strong>Mother's Name:</strong> {data.mothersName}</p>
              <p><strong>Permanent Division:</strong> {data.permanentDivision}</p>
              <p><strong>Present Division:</strong> {data.presentDivision}</p>
              <p><strong>Expected Partner Age:</strong> {data.expectedPartnerAge}</p>
              <p><strong>Expected Partner Height:</strong> {data.expectedPartnerHeight} cm</p>
              <p><strong>Expected Partner Weight:</strong> {data.expectedPartnerWeight} kg</p>
              <p><strong>Contact Email:</strong> {data.contactEmail}</p>
              <p><strong>Mobile Number:</strong> {data.mobileNumber}</p>
            </div>
            <button onClick={() => setIsOpen(true)} className="mt-4 px-4 py-2 bg-[#FF6F61] text-white rounded-md font-semibold hover:bg-[#e66558] focus:outline-none focus:ring-2 focus:ring-[#FF6F61]">
              Make Premium
            </button>
          </div>
        ))
      ) : (
        <p className="text-center">{user?.email ? "No biodata found." : "Please log in to view biodata."}</p>
      )}
      <PremiumRequestModal isOpen={isOpen} closeModal={closeModal} modalHandler={modalHandler} />
    </div>
  );
};

export default ViewBiodata;
