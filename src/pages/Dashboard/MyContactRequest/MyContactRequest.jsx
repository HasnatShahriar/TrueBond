
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MyContactRequest = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [], isLoading, isError, error, refetch } = useQuery({
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

  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/payments/${id}`)
          .then(res => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          })
      }
    });
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
          <col className="w-5" />
        </colgroup>
        <thead>
          <tr className="dark:bg-gray-300">
            <th className="p-3">#</th>
            <th className="p-3">Name</th>
            <th className="p-3">Status</th>
            <th className="p-3">Mobile Number</th>
            <th className="p-3">Email</th>
            <th className="p-3">Delete</th>
          </tr>
        </thead>
        <tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
          {payments.map((payment, index) => (
            <tr key={payment._id}>
              <td className="px-3 font-medium dark:text-gray-600">{index + 1}</td>
              <td className="px-3 py-2">{payment.biodataName}</td>
              <td className="px-3 py-2">{payment.status}</td>
              <td>
                {payment.status === 'Pending' ? (
                  <>
                    <td className="px-3 py-2" colSpan="2">If the status is approved</td>
                  </>
                ) : (
                  <>
                    <td className="px-3 py-2">{payment.biodataMobileNumber}</td>
                  </>
                )}
              </td>
              <td>
                {payment.status === 'Pending' ? (
                  <>
                    <td className="px-3 py-2" colSpan="2">If the status is approved</td>
                  </>
                ) : (
                  <>
                    <td className="px-3 py-2">{payment.biodataEmail}</td>
                  </>
                )}
              </td>
              <td className="px-3 py-2">
                <button onClick={() => handleDelete(payment._id)} className="btn btn-ghost btn-lg">
                  <FaTrashAlt className="text-red-500" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyContactRequest;
