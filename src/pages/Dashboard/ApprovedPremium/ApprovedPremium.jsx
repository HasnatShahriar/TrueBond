import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaUsers } from "react-icons/fa";
import UpdateUserModal from "../../../components/Modal/UpdateUserModal";
import toast from "react-hot-toast";
import { useState } from "react";


const ApprovedPremium = () => {

  const { user } = useAuth();


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
          toast.success(`Member is a Premium Now`)
        }else{
          toast.success("Please wait !!! Already Converted")
        }
        
      })
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
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                  >
                    Email
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                  >
                    Role
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                  >
                    Status
                  </th>

                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => <tr key={user._id}>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <p className='text-gray-900 whitespace-no-wrap'>{user?.email}</p>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <p className='text-gray-900 whitespace-no-wrap'>{user?.role}</p>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    {user?.status}
                  </td>

                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                      <span
                        aria-hidden='true'
                        className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
                      ></span>
                      <span className='relative'> <button onClick={() => handleMakePremium(user)} className="px-4 py-3 font-semibold rounded dark:bg-gray-800 dark:text-gray-100 bg-pink-600">
                        <FaUsers className="text-white text-2xl" />
                      </button></span>
                    </span>
                    {/* Update User Modal */}
                  </td>
                </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprovedPremium;