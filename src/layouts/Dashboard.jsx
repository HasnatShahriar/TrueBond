import { useContext } from "react";
import { FaEdit, FaPhone, FaUserCircle } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Navbar from "../Shared/Navbar/Navbar";
import { FaBookmark } from "react-icons/fa6";

const Dashboard = () => {
  const { logOut } = useContext(AuthContext);

  return (
    <div>
      <Navbar/>
      <div className="flex">
        <div className="w-64 min-h-screen bg-orange-300">
          {/* Sidebar */}
          <ul className="menu p-4 flex flex-col"> {/* Added flex styles */}
            <li className="flex items-center mb-2 border-2 p-2 border-black">
              <FaEdit className="text-xl font-bold" /> {/* Set minimum width for icon */}
              <NavLink to="/dashboard/editBiodata" className="ml-2">
                Edit Biodata
              </NavLink>
            </li>
            <li className="flex items-center mb-2  border-2 p-2 border-black">
              <FaUserCircle className="text-xl font-bold" /> {/* Set minimum width for icon */}
              <NavLink to="/dashboard/viewBiodata" className="ml-2">
                View Biodata
              </NavLink>
            </li>
            <li className="flex items-center mb-2  border-2 p-2 border-black">
              <FaPhone className="text-base font-bold"/> {/* Set minimum width for icon */}
              <NavLink to="/dashboard/myContactRequest" className="ml-2">
                My Contact Request
              </NavLink>
            </li>
            <li className="flex items-center mb-2  border-2 p-2 border-black">
              <FaBookmark className="text-xl font-bold" /> {/* Set minimum width for icon */}
              <NavLink to="/dashboard/favouritesBiodata" className="ml-2">
                Favorites Biodata
              </NavLink>
            </li>
            <li className="flex items-center mb-2  border-2 p-2 border-black"> {/* Removed margin for bottom item */}
              <MdLogout className="text-xl font-bold" /> {/* Set minimum width for icon */}
              <button onClick={logOut} className="btn btn-sm ml-2">
                Log Out
              </button>
            </li>
          </ul>
        </div>

        {/* Outlet --> Dynamic content */}
        <div className="flex-1">
          <div>

            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
