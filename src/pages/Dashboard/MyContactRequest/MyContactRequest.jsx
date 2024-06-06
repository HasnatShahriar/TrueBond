


import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyContactRequest = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [], isLoading, isError, error } = useQuery({
    queryKey: ['payments', user?.email],
    queryFn: async () => {
      if (!user?.email) {
        throw new Error("User is not authenticated");
      }
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
    enabled: !!user?.email, // Only run the query if user email is available
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  if (!user) {
    return <p>Please log in to see your contact requests.</p>;
  }

  return (
    <div>
      <h2>My Total contact request: {payments.length}</h2>
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
            <th className="p-3">Name</th>
            <th className="p-3">status</th>
            <th className="p-3">Mobile Number</th>
            <th className="p-3">Email</th>
          </tr>
        </thead>
        <tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
          {
            payments.map((payment, index) => (
              <tr key={payment._id}>
                <td className="px-3 font-medium dark:text-gray-600">{index + 1}</td>
                <td className="px-3 py-2">
                  <p>{payment?.biodataName}</p>
                </td>
                <td className="px-3 py-2">
                  <p>{payment?.status}</p>
                </td>
                {
                  payment?.status === 'Pending' ?
                    <>


                    </>
                    :
                    <>
                      <td className="px-3 py-2">
                        <p>{payment.biodataMobileNumber}</p>
                      </td>
                      <td className="px-3 py-2">
                        <p>{payment.biodataEmail}</p>
                      </td>
                    </>
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default MyContactRequest;
