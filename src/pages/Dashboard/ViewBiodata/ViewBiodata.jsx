
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useState } from "react";
import PremiumRequestModal from "../../../components/Modal/PremiumRequestModal";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const ViewBiodata = () => {
  const axiosSecure = useAxiosSecure();
  // for modal
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const modalHandler = async () => {
    console.log('I want to be premium !!!');
    closeModal();
    try{
      const currentUser = {
        email: user?.email,
        role: 'normal',
        status: 'Requested for Premium',
      }
      const { data } = await axiosSecure.put(`http://localhost:5000/user`, currentUser)
      console.log(data);
      if(data.modifiedCount > 0){
        toast.success("Success! Please Wait for Admin Approval")
      }else{
        toast.success("Please!!!, Wait for Admin Approval")
      }
      
    }catch(err){
      console.log(err);
      toast.error(err.message)
    }finally {
      closeModal()
    }
  }

  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const { data: biodata = [], isLoading: loading, isError: error } = useQuery({
    queryKey: user?.email ? ["viewBiodata", user.email] : [], // Use optional chaining
    queryFn: async () => {
      const res = await axiosPublic.get(`/myBiodata/${user.email}`);
      return res.data;
    },
    enabled: !!user, // Only run the query if user exists
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching biodata details: {error.message}</div>;
  }

  console.log(biodata);

  return (
    <div>
      {user?.email && biodata.length > 0 ? ( // Check for user and biodata existence
        biodata.map((data, index) => (
          <div key={index} className="border-2 rounded-lg ml-20 mb-4">
            <p><strong>Type:</strong> {data.biodataType}</p>
            <p><strong>Date of Birth:</strong> {data.dateOfBirth}</p>
            <p><strong>Age:</strong> {data.age}</p>
            <p><strong>Height:</strong> {data.height} cm</p>
            <p><strong>Weight:</strong> {data.weight} kg</p>
            <p><strong>Occupation:</strong> {data.occupation}</p>
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
            <button onClick={() => setIsOpen(true)}>Make Premium</button>
            <PremiumRequestModal isOpen={isOpen} closeModal={closeModal} modalHandler={modalHandler}/>
          </div>
        ))
      ) : (
        <p>{user?.email ? "No biodata found." : "Please log in to view biodata."}</p> // Display appropriate message
      )}
    </div>
  );
};

export default ViewBiodata;
