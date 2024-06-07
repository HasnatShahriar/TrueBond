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

  console.log(users);


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
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                  >
                    Name
                  </th>
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
                    Biodata Id
                  </th>

                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                  >
                    Approved contact request
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => <tr key={user._id}>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <p className='text-gray-900 whitespace-no-wrap'>{user?.name}</p>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <p className='text-gray-900 whitespace-no-wrap'>{user?.email}</p>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    {user?.biodataId}
                  </td>

                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>


                    {user?.status === 'Pending' ?
                      <button onClick={() => handleApprovedRequest(user)} className="px-4 py-3 font-semibold rounded dark:bg-gray-800 dark:text-gray-100 bg-pink-200">
                        Approve Request
                      </button> : 'Approved'
                    }
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

export default ApprovedContactRequest;