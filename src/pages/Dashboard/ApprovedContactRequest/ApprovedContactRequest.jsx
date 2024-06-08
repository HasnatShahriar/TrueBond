import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";

const ApprovedContactRequest = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], isLoading, refetch } = useQuery({
    queryKey: ['contactRequestedUsers'],
    queryFn: async () => {
      const res = await axiosSecure.get('/payments');
      return res.data;
    }
  });

  const handleApprovedRequest = user => {
    axiosSecure.patch(`/payments/contact/${user._id}`)
      .then(res => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          refetch();
          toast.success(`Approved Contact Request`)
        } else {
          toast.success("Already Converted")
        }
      })
  }

  if (isLoading) {
    return <p>Loading....</p>
  }

  return (
    <div className='container mx-auto px-4 sm:px-8'>
      <Helmet>
        <title>Approved Premium</title>
      </Helmet>
      <div className='py-8'>
        <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
          <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
            <table className='min-w-full leading-normal'>
              <thead>
                <tr>
                  <th className='px-6 py-3 bg-gray-100 border-b border-gray-200 text-gray-800 text-left text-xs uppercase font-semibold'>Name</th>
                  <th className='px-6 py-3 bg-gray-100 border-b border-gray-200 text-gray-800 text-left text-xs uppercase font-semibold'>Email</th>
                  <th className='px-6 py-3 bg-gray-100 border-b border-gray-200 text-gray-800 text-left text-xs uppercase font-semibold'>Biodata ID</th>
                  <th className='px-6 py-3 bg-gray-100 border-b border-gray-200 text-gray-800 text-left text-xs uppercase font-semibold'>Approved Contact Request</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user._id} className='bg-white border-b border-gray-200'>
                    <td className='px-6 py-4 whitespace-no-wrap text-sm text-gray-900'>{user?.name}</td>
                    <td className='px-6 py-4 whitespace-no-wrap text-sm text-gray-900'>{user?.email}</td>
                    <td className='px-6 py-4 whitespace-no-wrap text-sm'>{user?.biodataId}</td>
                    <td className='px-6 py-4 whitespace-no-wrap text-sm'>
                      {user?.status === 'Pending' ? (
                        <button onClick={() => handleApprovedRequest(user)} className='px-4 py-2 font-semibold rounded bg-pink-200 hover:bg-pink-300 focus:outline-none'>
                          Approve Request
                        </button>
                      ) : (
                        <span className='text-gray-600'>Approved</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprovedContactRequest;
