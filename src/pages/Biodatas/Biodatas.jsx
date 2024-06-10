
import { useEffect, useState } from "react";
import useBiodatas from "../../hooks/useBiodatas";
import { Link } from "react-router-dom";

const Biodatas = () => {
  const [biodatas] = useBiodatas();
  const [filteredBiodatas, setFilteredBiodatas] = useState([]);
  const [filterCriteria, setFilterCriteria] = useState({
    minAge: 18,
    maxAge: 70,
    biodataType: "",
    permanentDivision: ""
  });

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const biodatasPerPage = 6; // Adjust the number of biodatas per page as needed

  useEffect(() => {
    setFilteredBiodatas(biodatas);
  }, [biodatas]);

  useEffect(() => {
    let filtered = [...biodatas];

    // Filter by age range
    if (filterCriteria.minAge && filterCriteria.maxAge) {
      filtered = filtered.filter(
        (biodata) =>
          biodata.age >= filterCriteria.minAge &&
          biodata.age <= filterCriteria.maxAge
      );
    }

    // Filter by biodata type
    if (filterCriteria.biodataType) {
      filtered = filtered.filter(
        (biodata) => biodata.biodataType === filterCriteria.biodataType
      );
    }

    // Filter by division
    if (filterCriteria.permanentDivision) {
      filtered = filtered.filter(
        (biodata) =>
          biodata.permanentDivision === filterCriteria.permanentDivision
      );
    }

    setFilteredBiodatas(filtered);
    setCurrentPage(1); // Reset to first page after filtering
  }, [filterCriteria, biodatas]);

  // Function to handle input change in filter section
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilterCriteria({
      ...filterCriteria,
      [name]: value
    });
  };

  // Function to handle filter button click
  const handleFilter = () => {
    // This function can be used to trigger any additional actions if needed
    // Currently, the useEffect will automatically filter the data based on filterCriteria
    setFilterCriteria({ ...filterCriteria });
  };

  // Get current biodatas
  const indexOfLastBiodata = currentPage * biodatasPerPage;
  const indexOfFirstBiodata = indexOfLastBiodata - biodatasPerPage;
  const currentBiodatas = filteredBiodatas.slice(
    indexOfFirstBiodata,
    indexOfLastBiodata
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 py-8">
      <div className="flex flex-col lg:flex-row w-full max-w-screen-xl px-4 lg:px-8">
        {/* Filter Options */}
        <div className="w-full lg:w-1/4 p-4 bg-white rounded-lg shadow-lg mb-8 lg:mb-0">
          <h2 className="text-xl font-semibold mb-4">Filter Options</h2>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Age Range: {filterCriteria.minAge} - {filterCriteria.maxAge}</label>
            <input
              type="range"
              name="minAge"
              min="18"
              max="70"
              value={filterCriteria.minAge}
              onChange={(e) =>
                setFilterCriteria({
                  ...filterCriteria,
                  minAge: parseInt(e.target.value)
                })
              }
              className="w-full mb-2"
            />
            <input
              type="range"
              name="maxAge"
              min="18"
              max="70"
              value={filterCriteria.maxAge}
              onChange={(e) =>
                setFilterCriteria({
                  ...filterCriteria,
                  maxAge: parseInt(e.target.value)
                })
              }
              className="w-full mb-2"
            />
            <select
              name="biodataType"
              value={filterCriteria.biodataType}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
            >
              <option value="">Biodata Type</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <select
              name="permanentDivision"
              value={filterCriteria.permanentDivision}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
            >
              <option value="">Permanent Division</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Chittagong">Chittagong</option>
              <option value="Rangpur">Rangpur</option>
              <option value="Barisal">Barisal</option>
              <option value="Khulna">Khulna</option>
              <option value="Maymansign">Maymansign</option>
              <option value="Sylhet">Sylhet</option>
              <option value="Rajshahi">Rajshahi</option>
            </select>
            <button
              onClick={handleFilter}
              className="w-full px-6 py-3 bg-[#FF6F61] text-white rounded-md font-semibold hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-600"
            >
              Apply Filter
            </button>
          </div>
        </div>

        {/* Biodata Cards */}
        <div className="w-full lg:w-3/4 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentBiodatas.map((biodata) => (
              <div
                key={biodata._id}
                className="bg-white border border-gray-200 rounded-md overflow-hidden shadow-lg"
              >
                <img
                  src={biodata.profileImageUrl}
                  alt={biodata.name}
                  className="w-32 h-32 rounded-full mx-auto mt-4 object-cover"
                />
                <div className="p-6">
                  <p className="text-gray-600"><strong>Biodata ID:</strong> {biodata.biodataId}</p>
                  <p className="text-gray-600"><strong>Biodata Type:</strong> {biodata.biodataType}</p>
                  <p className="text-gray-600"><strong>Age:</strong> {biodata.age}</p>
                  <p className="text-gray-600"><strong>Occupation:</strong> {biodata.occupation}</p>
                  <p className="text-gray-600"><strong>Permanent Division:</strong> {biodata.permanentDivision}</p>
                  <Link
                    to={`/biodatas/${biodata._id}`}
                    className="block mt-4 text-[#FF6F61] hover:underline"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            {[...Array(Math.ceil(filteredBiodatas.length / biodatasPerPage)).keys()].map(
              (number) => (
                <button
                  key={number}
                  onClick={() => paginate(number + 1)}
                  className={`px-4 py-2 mx-1 bg-[#FF6F61] border border-gray-300 rounded-md ${currentPage === number + 1
                    ? "bg-white text-black"
                    : "hover:bg-gray-200"
                    }`}
                >
                  {number + 1}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biodatas;

