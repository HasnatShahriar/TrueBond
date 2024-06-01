import { useState } from 'react';

const EditBiodata = () => {
  const [formData, setFormData] = useState({
    biodataType: '',
    name: '',
    profileImageUrl: '',
    dateOfBirth: '',
    height: '',
    weight: '',
    age: '',
    occupation: '',
    race: '',
    fathersName: '',
    mothersName: '',
    permanentDivision: '',
    presentDivision: '',
    expectedPartnerAge: '',
    expectedPartnerHeight: '',
    expectedPartnerWeight: '',
    contactEmail: 'user@example.com', // Assuming user email is readonly and fetched from user context
    mobileNumber: ''
  });

  const divisions = ['Dhaka', 'Chattagram', 'Rangpur', 'Barisal', 'Khulna', 'Maymansign', 'Sylhet'];
  const occupations = ['Engineer', 'Doctor', 'Teacher', 'Artist', 'Business Owner', 'Other'];
  const races = ['Asian', 'Black or African American', 'White', 'Hispanic or Latino', 'Native American or American Indian', 'Other'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className=" mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Edit Biodata</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* First Column */}
          <div className="space-y-4">
            <div className="form-group">
              <label className="block text-gray-700 font-semibold mb-2">Biodata Type:</label>
              <select
                name="biodataType"
                value={formData.biodataType}
                onChange={handleChange}
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            {/* Other select inputs */}
            <div className="form-group">
              <label className="block text-gray-700 font-semibold mb-2">Occupation:</label>
              <select
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="">Select</option>
                {occupations.map((occupation, index) => (
                  <option key={index} value={occupation}>{occupation}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="block text-gray-700 font-semibold mb-2">Race:</label>
              <select
                name="race"
                value={formData.race}
                onChange={handleChange}
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="">Select</option>
                {races.map((race, index) => (
                  <option key={index} value={race}>{race}</option>
                ))}
              </select>
            </div>

            {/* Other input fields */}
            <div className="form-group">
              <label className="block text-gray-700 font-semibold mb-2">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="form-group">
              <label className="block text-gray-700 font-semibold mb-2">Profile Image URL:</label>
              <input
                type="url"
                name="profileImageUrl"
                value={formData.profileImageUrl}
                onChange={handleChange}
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="form-group">
              <label className="block text-gray-700 font-semibold mb-2">Date of Birth:</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="form-group">
              <label className="block text-gray-700 font-semibold mb-2">Height (cm):</label>
              <input
                type="number"
                name="height"
                value={formData.height}
                onChange={handleChange}
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="form-group">
              <label className="block text-gray-700 font-semibold mb-2">Weight (kg):</label>
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="form-group">
              <label className="block text-gray-700 font-semibold mb-2">Age:</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          {/* Second Column */}
          <div className="space-y-4">
            {/* Other input fields */}
            <div className="form-group">
              <label className="block text-gray-700 font-semibold mb-2">Father's Name:</label>
              <input
                type="text"
                name="fathersName"
                value={formData.fathersName}
                onChange={handleChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="form-group">
              <label className="block text-gray-700 font-semibold mb-2">Mother's Name:</label>
              <input
                type="text"
                name="mothersName"
                value={formData.mothersName}
                onChange={handleChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="form-group">
              <label className="block text-gray-700 font-semibold mb-2">Permanent Division:</label>
              <select
                name="permanentDivision"
                value={formData.permanentDivision}
                onChange={handleChange}
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="">Select</option>
                {divisions.map((division, index) => (
                  <option key={index} value={division}>{division}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="block text-gray-700 font-semibold mb-2">Present Division:</label>
              <select
                name="presentDivision"
                value={formData.presentDivision}
                onChange={handleChange}
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="">Select</option>
                {divisions.map((division, index) => (
                  <option key={index} value={division}>{division}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="block text-gray-700 font-semibold mb-2">Expected Partner Age (From - To):</label>
              <input
                type="text"
                name="expectedPartnerAge"
                value={formData.expectedPartnerAge}
                onChange={handleChange}
                required
                placeholder="e.g., 25 - 30"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="form-group">
              <label className="block text-gray-700 font-semibold mb-2">Expected Partner Height (cm):</label>
              <input
                type="number"
                name="expectedPartnerHeight"
                value={formData.expectedPartnerHeight}
                onChange={handleChange}
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="form-group">
              <label className="block text-gray-700 font-semibold mb-2">Expected Partner Weight (kg):</label>
              <input
                type="number"
                name="expectedPartnerWeight"
                value={formData.expectedPartnerWeight}
                onChange={handleChange}
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="form-group">
              <label className="block text-gray-700 font-semibold mb-2">Contact Email:</label>
              <input
                type="email"
                name="contactEmail"
                value={formData.contactEmail}
                readOnly
                className="block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
              />
            </div>

            <div className="form-group">
              <label className="block text-gray-700 font-semibold mb-2">Mobile Number:</label>
              <input
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-4">
          <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBiodata;
