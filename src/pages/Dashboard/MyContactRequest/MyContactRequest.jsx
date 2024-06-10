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
    return <p className="text-center">Loading...</p>;
  }

  if (isError) {
    return <p className="text-center">Error: {error.message}</p>;
  }

  if (!user) {
    return <p className="text-center">Please log in to see your contact requests.</p>;
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/payments/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <h2 className="text-2xl font-bold mb-4">My total contact request: {payments.length}</h2>
      <table className="w-full p-6 text-xs text-left">
        <colgroup>
          <col className="w-1/12" />
          <col className="w-2/12" />
          <col className="w-2/12" />
          <col className="w-2/12" />
          <col className="w-3/12" />
          <col className="w-2/12" />
        </colgroup>
        <thead className="bg-gray-200 dark:bg-gray-700">
          <tr>
            <th className="p-3">#</th>
            <th className="p-3">Name</th>
            <th className="p-3">Status</th>
            <th className="p-3">Mobile Number</th>
            <th className="p-3">Email</th>
            <th className="p-3">Delete</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => (
            <tr key={payment._id} className={index % 2 === 0 ? 'bg-gray-100 dark:bg-gray-800' : 'bg-white dark:bg-gray-900'}>
              <td className="p-3">{index + 1}</td>
              <td className="p-3">{payment.biodataName}</td>
              <td className="p-3">{payment.status}</td>
              <td className="p-3">{payment.status === 'Pending' ? 'Not approved yet' : payment.biodataMobileNumber}</td>
              <td className="p-3">{payment.status === 'Pending' ? 'Not approved yet' : payment.biodataEmail}</td>
              <td className="p-3">
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
