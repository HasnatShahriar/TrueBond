
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AdminSuccessStory = () => {
  const axiosSecure = useAxiosSecure();
  const [selectedStory, setSelectedStory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: stories, isLoading } = useQuery({
    queryKey: ['admin-success-story'],
    queryFn: async () => {
      const res = await axiosSecure.get('/success-stories');
      return res.data;
    },
  });

  const handleViewStory = (story) => {
    setSelectedStory(story);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedStory(null);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Male Biodata ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Female Biodata ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {stories.map((story, index) => (
            <tr key={story._id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{story.selfBiodataId}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{story.partnerBiodataId}</td>
              <td 
                className="px-6 py-4 whitespace-nowrap text-sm text-blue-500 cursor-pointer hover:underline"
                onClick={() => handleViewStory(story)}
              >
                View Story
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {isModalOpen && selectedStory && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-middle bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Success Story Details
                </h3>
              </div>
              <div className="px-4 py-4 sm:px-6">
                <p className="text-sm text-gray-500">
                  {selectedStory.successStory}
                </p>
              </div>
              <div className="px-4 py-4 sm:px-6">
                <button 
                  type="button" 
                  className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminSuccessStory;

