// import { useEffect, useState } from "react";

// const Biodatas = () => {
//   const [biodatas, setBiodatas] = useState([]);
//   const [filteredBiodatas, setFilteredBiodatas] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/biodatas")
//       .then((res) => res.json())
//       .then((data) => {
//         setBiodatas(data);
//         setFilteredBiodatas(data);
//       });
//   }, []);

//   // Function to handle filtering
//   const handleFilter = (criteria) => {
//     // Implement filtering logic based on criteria
//     // Update filteredBiodatas state accordingly
//   };

//   return (
//     <div className="flex">
//       {/* Filter Options */}
//       <div className="w-1/4 p-4">
//         <h2 className="text-xl font-bold mb-4">Filter Options</h2>
//         {/* Add filter options components here */}
//       </div>

//       {/* Biodata List */}
//       <div className="w-3/4 p-4">
//         <h2 className="text-xl font-bold mb-4">All Created Biodata</h2>
//         {/* Display filteredBiodatas */}
//         {filteredBiodatas.map((biodata) => (
//           <div key={biodata.id} className="border border-gray-200 rounded-md p-4 mb-4">
//             {/* Display biodata details here */}
//             <h3 className="text-lg font-semibold">{biodata.name}</h3>
//             <p className="text-gray-600">Date of Birth: {biodata.dateOfBirth}</p>
//             <p className="text-gray-600">Occupation: {biodata.occupation}</p>
//             {/* Add more biodata details as needed */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Biodatas;








import { useEffect, useState } from "react";

const Biodatas = () => {
  const [biodatas, setBiodatas] = useState([]);
  const [filteredBiodatas, setFilteredBiodatas] = useState([]);
  const [filterCriteria, setFilterCriteria] = useState({
    minAge: '',
    maxAge: '',
    biodataType: '',
    division: ''
  });

  useEffect(() => {
    fetch("http://localhost:5000/biodatas")
      .then((res) => res.json())
      .then((data) => {
        setBiodatas(data);
        setFilteredBiodatas(data);
      });
  }, []);

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
    if (filterCriteria.division) {
      filtered = filtered.filter(biodata => biodata.division === filterCriteria.division);
    }

    setFilteredBiodatas(filtered);
  };

  // Function to handle input change in filter section
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilterCriteria({
      ...filterCriteria,
      [name]: value
    });
  };

  return (
    <div className="flex">
      {/* Filter Options */}
      <div className="w-1/4 p-4">
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
            name="division"
            value={filterCriteria.division}
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
      <div className="w-3/4 p-4">
        <h2 className="text-xl font-bold mb-4">All Created Biodata</h2>
        {/* Display filteredBiodatas */}
        {filteredBiodatas.map((biodata) => (
          <div key={biodata.id} className="border border-gray-200 rounded-md p-4 mb-4">
            {/* Display biodata details here */}
            <h3 className="text-lg font-semibold">{biodata.name}</h3>
            <p className="text-gray-600">Date of Birth: {biodata.dateOfBirth}</p>
            <p className="text-gray-600">Occupation: {biodata.occupation}</p>
            {/* Add more biodata details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Biodatas;
