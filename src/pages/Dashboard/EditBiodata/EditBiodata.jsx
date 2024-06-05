import { useContext, useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../providers/AuthProvider';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const EditBiodata = () => {
  const axiosPublic = useAxiosPublic();
  const { user, loading } = useContext(AuthContext);

  // Initial default values
  const initialFormData = {
    biodataType: '',
    name: '',
    profileImageUrl: '', // No default value specified for image upload
    dateOfBirth: '',
    height: '',
    weight: '',
    age: '',
    occupation: '', // No default value specified
    race: '', // No default value specified
    fathersName: '', // No default value specified
    mothersName: '', // No default value specified
    permanentDivision: '', // No default value specified
    presentDivision: '', // No default value specified
    expectedPartnerAge: '', // No default value specified
    expectedPartnerHeight: '', // No default value specified
    expectedPartnerWeight: '', // No default value specified
    contactEmail: user?.email || 'reload please', // Setting default value based on user's email
    mobileNumber: '' // No default value specified
  };

  const [formData, setFormData] = useState(initialFormData);

  

  const divisions = ['Dhaka', 'Chattagram', 'Rangpur', 'Barisal', 'Khulna', 'Mymensingh', 'Sylhet'];
  const occupations = ['Engineer', 'Doctor', 'Teacher', 'Artist', 'Business Owner', 'House-Wife', 'Other'];
  const races = ['Asian', 'Black or African American', 'White', 'Hispanic or Latino', 'Native American or American Indian', 'Other'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const imageFile = e.target.profileImageUrl.files[0];
    const imageData = new FormData();
    imageData.append('image', imageFile);

    try {
      const imageResponse = await axiosPublic.post(image_hosting_api, imageData, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      });

      const imageUrl = imageResponse.data.data.url;

      const biodata = {
        ...formData,
        profileImageUrl: imageUrl
      };

      const response = await axiosPublic.put('/biodatas', biodata);

      console.log('Biodata submitted successfully:', response.data);
      toast.success('Biodata submitted successfully');
    } catch (error) {
      console.error('Error submitting biodata:', error);
      toast.error('Error submitting biodata');
    }
  };

  if (loading) return <p>Loading...</p>

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
                type="file"
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
                defaultValue={user?.email}
                type="email"
                name="email"
                // value={formData.contactEmail}
                required
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





