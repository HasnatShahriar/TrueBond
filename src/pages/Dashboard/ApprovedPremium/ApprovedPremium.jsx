import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { FaAngleDoubleRight } from "react-icons/fa";

const ApprovedPremium = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], isLoading, refetch } = useQuery({
    queryKey: ['premiumRequestedUsers'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users/requested-premium');
      return res.data;
    }
  });

  const handleMakePremium = user => {
    axiosSecure.patch(`/users/premium/${user._id}`)
      .then(res => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          refetch();
          toast.success(`${user?.name} is a Premium Now`)
        } else {
          toast.success("Already Converted")
        }
      })
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  console.log(users);

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
                  <th className='px-6 py-3 bg-gray-100 border-b border-gray-200 text-gray-800 text-left text-xs uppercase font-semibold'>Make Premium</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user._id} className={(user.role === 'premium') ? 'bg-green-50' : 'bg-white'}>
                    <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm'>{user?.name}</td>
                    <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm'>{user?.email}</td>
                    <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm'>{user?.biodataId}</td>
                    <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm'>
                      <button onClick={() => handleMakePremium(user)} className={(user.role === 'premium') ? 'bg-gray-300 text-gray-600 px-4 py-2 rounded-full focus:outline-none' : 'bg-[#e66558] text-white px-4 py-2 rounded-full focus:outline-none'}>
                        <FaAngleDoubleRight className="text-xl" />
                      </button>
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

export default ApprovedPremium;
