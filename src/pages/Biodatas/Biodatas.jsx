
import { useEffect, useState } from "react";
import useBiodatas from "../../hooks/useBiodatas";
import { Link } from "react-router-dom";

const Biodatas = () => {
  const [biodatas] = useBiodatas();
  const [filteredBiodatas, setFilteredBiodatas] = useState([]);
  const [filterCriteria, setFilterCriteria] = useState({
    minAge: '',
    maxAge: '',
    biodataType: '',
    permanentDivision: ''
  });

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const biodatasPerPage = 6; // Adjust the number of biodatas per page as needed

  useEffect(() => {
    setFilteredBiodatas(biodatas);
  }, [biodatas]);

  // Function to handle filtering
  const handleFilter = () => {
    let filtered = [...biodatas];

    // Filter by age range
    if (filterCriteria.minAge && filterCriteria.maxAge) {
      filtered = filtered.filter(biodata => biodata.age >= filterCriteria.minAge && biodata.age <= filterCriteria.maxAge);
    }

    // Filter by biodata type
    if (filterCriteria.biodataType) {
      filtered = filtered.filter(biodata => biodata.biodataType === filterCriteria.biodataType);
    }

    // Filter by division
    if (filterCriteria.permanentDivision) {
      filtered = filtered.filter(biodata => biodata.permanentDivision === filterCriteria.permanentDivision);
    }

    setFilteredBiodatas(filtered);
    setCurrentPage(1); // Reset to first page after filtering
  };

  // Function to handle input change in filter section
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilterCriteria({
      ...filterCriteria,
      [name]: value
    });
  };

  // Get current biodatas
  const indexOfLastBiodata = currentPage * biodatasPerPage;
  const indexOfFirstBiodata = indexOfLastBiodata - biodatasPerPage;
  const currentBiodatas = filteredBiodatas.slice(indexOfFirstBiodata, indexOfLastBiodata);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <div className="flex">
      {/* Filter Options */}
      <div className="w-1/3 p-4">
        <h2 className="text-xl font-bold mb-4">Filter Options</h2>
        {/* Age Range Filter */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Age Range:</label>
          <div className="flex">
            <input
              type="number"
              name="minAge"
              value={filterCriteria.minAge}
              onChange={handleInputChange}
              placeholder="Min"
              className="block w-1/2 px-3 py-2 mr-2 border border-gray-300 rounded-md"
            />
            <input
              type="number"
              name="maxAge"
              value={filterCriteria.maxAge}
              onChange={handleInputChange}
              placeholder="Max"
              className="block w-1/2 px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
        {/* Biodata Type Filter */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Biodata Type:</label>
          <select
            name="biodataType"
            value={filterCriteria.biodataType}
            onChange={handleInputChange}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        {/* Division Filter */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Division:</label>
          <select
            name="permanentDivision" // Ensure this matches the key in filterCriteria
            value={filterCriteria.permanentDivision}
            onChange={handleInputChange}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="">Select</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Chattagram">Chattagram</option>
            <option value="Rangpur">Rangpur</option>
            <option value="Barisal">Barisal</option>
            <option value="Khulna">Khulna</option>
            <option value="Maymansign">Maymansign</option>
            <option value="Sylhet">Sylhet</option>
          </select>
        </div>
        {/* Apply Filter Button */}
        <button onClick={handleFilter} className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700">
          Apply Filter
        </button>
      </div>

      {/* Biodata List */}
      <div className="">
        <h2 className="text-xl font-bold mb-4">All Created Biodata</h2>
        {/* Display filteredBiodatas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentBiodatas.map((biodata) => (
            <div key={biodata._id} className="border border-gray-200 rounded-md p-4 mb-4">
              {/* Display biodata details here */}
              <img src={biodata.profileImageUrl} alt="" />
              <h3 className="text-lg font-semibold">Biodata ID: {biodata.biodataId}</h3>
              <h3 className="text-lg font-semibold">Name: {biodata.name}</h3>
              <p className="text-gray-600">Age: {biodata.age}</p>
              <p className="text-gray-600">Occupation: {biodata.occupation}</p>
              <p className="text-gray-600">Permanent Division: {biodata.permanentDivision}</p>
              {/* Add more biodata details as needed */}
              <Link to={`/biodatas/${biodata._id}`}>
                <button type="button" className="px-8 py-3 font-semibold border rounded dark:border-gray-800 dark:text-gray-800">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-4">
          {[...Array(Math.ceil(filteredBiodatas.length / biodatasPerPage)).keys()].map(number => (
            <button key={number} onClick={() => paginate(number + 1)} className={`px-4 py-2 mx-1 ${currentPage === number + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}>
              {number + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Biodatas;
