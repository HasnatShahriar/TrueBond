import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const FavouritesBiodata = () => {
  const axiosPublic = useAxiosPublic();

  const { data: favorites = [], isLoading: loading, isError: error,refetch } = useQuery({
    queryKey: ['favorites'],
    queryFn: async () => {
      const res = await axiosPublic.get('/favorites');
      return res.data;
    }
  });

  const handleRemoveFromFavorites = async (id) => {
    try {
      await axiosPublic.delete(`/favorites/${id}`);
      refetch();
    } catch (err) {
      console.error('Error removing favorite:', err);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching favorites: {error.message}</div>;
  }

  return (
    <div className="m-5 font-sans">
      <h2 className="text-2xl font-bold mb-4">My Favorites</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Biodata ID</th>
            <th className="py-2 px-4">Permanent Address</th>
            <th className="py-2 px-4">Occupation</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {favorites.map((biodata) => (
            <tr key={biodata._id}>
              <td className="border px-4 py-2">{biodata.name}</td>
              <td className="border px-4 py-2">{biodata.biodataId}</td>
              <td className="border px-4 py-2">{biodata.permanentDivision}</td>
              <td className="border px-4 py-2">{biodata.occupation}</td>
              <td className="border px-4 py-2">
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded"
                  onClick={() => handleRemoveFromFavorites(biodata._id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FavouritesBiodata;
