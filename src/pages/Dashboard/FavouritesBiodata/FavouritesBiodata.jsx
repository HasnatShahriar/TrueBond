import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const FavouritesBiodata = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: favorites = [], isLoading: loading, isError: error, refetch } = useQuery({
    queryKey: ['favorites', user?.email],
    queryFn: async () => {
      if (!user?.email) {
        throw new Error("User is not authenticated");
      }
      const res = await axiosSecure.get(`/favorites/${user?.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });

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
        axiosSecure.delete(`/favorites/${id}`).then((res) => {
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching favorites: {error.message}</div>;
  }

  return (
    <div className="m-5 font-sans">
      <h2 className="text-2xl font-bold mb-4">My total favorites Biodata is: {favorites.length}</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Biodata ID</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Permanent Address</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Occupation</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {favorites.map((biodata) => (
              <tr key={biodata._id}>
                <td className="px-6 py-4 whitespace-nowrap">{biodata.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{biodata.biodataId}</td>
                <td className="px-6 py-4 whitespace-nowrap">{biodata.permanentDivision}</td>
                <td className="px-6 py-4 whitespace-nowrap">{biodata.occupation}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded focus:outline-none focus:bg-red-600"
                    onClick={() => handleDelete(biodata._id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FavouritesBiodata;
