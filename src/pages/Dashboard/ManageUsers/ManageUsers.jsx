


import { useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaUsers } from "react-icons/fa6";
import toast from "react-hot-toast";

const ManageUsers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const axiosSecure = useAxiosSecure();
  const { data: users = [],isLoading, refetch } = useQuery({
    queryKey: ['users', searchTerm],
    queryFn: async () => {
      if (searchTerm) {
        const res = await axiosSecure.get(`/users/search?username=${searchTerm}`);
        return res.data;
      } else {
        const res = await axiosSecure.get('/users');
        return res.data;
      }
    }
  });

  if(isLoading) return <p>Loading....</p>

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    refetch();
  }

  const handleMakeAdmin = user => {
    axiosSecure.patch(`/users/admin/${user._id}`)
      .then(res => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          refetch();
          toast.success(`${user.name} is an Admin Now`)
        }
      })
  }

  const handleMakePremium = user => {
    axiosSecure.patch(`/users/premium/${user._id}`)
      .then(res => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          refetch();
          toast.success(`${user.name} is a Premium Now`)
        }
      })
  }
console.log(users);
  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h2 className="text-3xl">All Users</h2>
        <h2 className="text-3xl">Total Users: {users.length}</h2>
        <input
          type="text"
          placeholder="Search by username"
          value={searchTerm}
          onChange={handleSearch}
          className="input input-bordered border-2"
        />
      </div>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
        <h2 className="mb-4 text-2xl font-semibold leading-tight">Contacts</h2>
        <div className="overflow-x-auto">
          <table className="w-full p-6 text-xs text-left whitespace-nowrap">
            <colgroup>
              <col className="w-5" />
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="w-5" />
            </colgroup>
            <thead>
              <tr className="dark:bg-gray-300">
                <th className="p-3">#</th>
                <th className="p-3">User Name</th>
                <th className="p-3">User Email</th>
                <th className="p-3">Make Admin</th>
                <th className="p-3">Make Premium</th>
              </tr>
            </thead>
            <tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
              {
                users.map((user, index) => (
                  <tr key={user._id}>
                    <td className="px-3 font-medium dark:text-gray-600">{index + 1}</td>
                    <td className="px-3 py-2">
                      <p>{user?.name}</p>
                    </td>
                    <td className="px-3 py-2">
                      <span>{user?.email}</span>
                    </td>
                    <td className="px-3 py-2">
                      {user.role === 'admin' ? 'Admin' : (
                        <button onClick={() => handleMakeAdmin(user)} className="px-4 py-3 font-semibold rounded dark:bg-gray-800 dark:text-gray-100 bg-orange-600">
                          <FaUsers className="text-white text-2xl" />
                        </button>
                      )}
                    </td>
                    <td className="px-3 py-2">
                      {user.role === 'premium' ? 'Premium' : (
                        <button onClick={() => handleMakePremium(user)} className="px-4 py-3 font-semibold rounded dark:bg-gray-800 dark:text-gray-100 bg-pink-600">
                          <FaUsers className="text-white text-2xl" />
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
