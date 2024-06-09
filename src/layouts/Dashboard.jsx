// import { FaEdit, FaHome, FaPhone, FaUserCircle, FaUsersCog } from "react-icons/fa";
// import { MdApproval, MdLogout, MdOutlineContactPhone, MdOutlineSpaceDashboard } from "react-icons/md";
// import { NavLink, Outlet } from "react-router-dom";
// import { FaBookmark } from "react-icons/fa6";
// import { GiClover, GiLovers } from "react-icons/gi";
// import useRole from "../hooks/useRole";
// import useAuth from "../hooks/useAuth";

// const Dashboard = () => {
//   const { logOut } = useAuth();
//   const [role, isLoading] = useRole();

//   if (isLoading) return <p>Loading...</p>

//   return (
//     <div>
//       <div className="flex flex-col md:flex-row">
//         <div className="w-full md:w-64 min-h-screen bg-orange-300">
//           {/* Sidebar */}
//           <ul className="menu p-4 flex flex-col">
//             {
//               role === 'admin' ?
//                 <>
//                   <li className="flex items-center mb-2 border-2 p-2 border-black">
//                     <FaHome className="text-xl font-bold" />
//                     <NavLink to="/" className="ml-2">
//                       Back Home
//                     </NavLink>
//                   </li>
//                   <li className="flex items-center mb-2 border-2 p-2 border-black">
//                     <MdOutlineSpaceDashboard className="text-xl font-bold" />
//                     <NavLink to="/dashboard" className="ml-2">
//                       Admin Dashboard
//                     </NavLink>
//                   </li>
//                   <li className="flex items-center mb-2 border-2 p-2 border-black">
//                     <FaUsersCog className="text-xl font-bold" />
//                     <NavLink to="/dashboard/manage" className="ml-2">
//                       Manage Users
//                     </NavLink>
//                   </li>
//                   <li className="flex items-center mb-2 border-2 p-2 border-black">
//                     <MdApproval className="text-base font-bold" />
//                     <NavLink to="/dashboard/approvedPremium" className="ml-2">
//                       Approved Premium
//                     </NavLink>
//                   </li>
//                   <li className="flex items-center mb-2 border-2 p-2 border-black">
//                     <MdOutlineContactPhone className="text-xl font-bold" />
//                     <NavLink to="/dashboard/approvedContactRequest" className="ml-2">
//                       Approved Contact Request
//                     </NavLink>
//                   </li>
//                   <li className="flex items-center mb-2 border-2 p-2 border-black">
//                     <GiClover className="text-xl font-bold" />
//                     <NavLink to="/dashboard/successStory" className="ml-2">
//                       Success Story
//                     </NavLink>
//                   </li>
//                   <li className="flex items-center mb-2 border-2 p-2 border-black">
//                     <MdLogout className="text-xl font-bold" />
//                     <button onClick={logOut} className="btn btn-sm ml-2">
//                       Log Out
//                     </button>
//                   </li>
//                 </>
//                 :
//                 <>
//                   <li className="flex items-center mb-2 border-2 p-2 border-black">
//                     <FaHome className="text-xl font-bold" />
//                     <NavLink to="/" className="ml-2">
//                       Back Home
//                     </NavLink>
//                   </li>
//                   <li className="flex items-center mb-2 border-2 p-2 border-black">
//                     <FaEdit className="text-xl font-bold" />
//                     <NavLink to="/dashboard" className="ml-2">
//                       User Dashboard
//                     </NavLink>
//                   </li>
//                   <li className="flex items-center mb-2 border-2 p-2 border-black">
//                     <FaEdit className="text-xl font-bold" />
//                     <NavLink to="/dashboard/editBiodata" className="ml-2">
//                       Edit Biodata
//                     </NavLink>
//                   </li>
//                   <li className="flex items-center mb-2 border-2 p-2 border-black">
//                     <FaUserCircle className="text-xl font-bold" /> {/* Set minimum width for icon */}
//                     <NavLink to="/dashboard/viewBiodata" className="ml-2">
//                       View Biodata
//                     </NavLink>
//                   </li>
//                   <li className="flex items-center mb-2 border-2 p-2 border-black">
//                     <FaPhone className="text-base font-bold" />
//                     <NavLink to="/dashboard/myContactRequest" className="ml-2">
//                       My Contact Request
//                     </NavLink>
//                   </li>
//                   <li className="flex items-center mb-2 border-2 p-2 border-black">
//                     <FaBookmark className="text-xl font-bold" />
//                     <NavLink to="/dashboard/favouritesBiodata" className="ml-2">
//                       Favorites Biodata
//                     </NavLink>
//                   </li>
//                   <li className="flex items-center mb-2 border-2 p-2 border-black">
//                     <GiLovers className="text-xl font-bold" />
//                     <NavLink to="/dashboard/gotMarried" className="ml-2">
//                       Got Married
//                     </NavLink>
//                   </li>
//                   <li className="flex items-center mb-2 border-2 p-2 border-black">
//                     <MdLogout className="text-xl font-bold" />
//                     <button onClick={logOut} className="btn btn-sm ml-2">
//                       Log Out
//                     </button>
//                   </li>
//                 </>
//             }
//           </ul>
//         </div>

//         {/* Outlet --> Dynamic content */}
//         <div className="flex-1 p-4">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;






import { FaEdit, FaHome, FaPhone, FaUserCircle, FaUsersCog } from "react-icons/fa";
import { MdApproval, MdLogout, MdOutlineContactPhone, MdOutlineSpaceDashboard } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import { FaBookmark } from "react-icons/fa6";
import { GiClover, GiLovers } from "react-icons/gi";
import useRole from "../hooks/useRole";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const { logOut } = useAuth();
  const [role, isLoading] = useRole();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="w-full md:w-64 bg-orange-300">
        {/* Sidebar */}
        <ul className="menu p-4 flex flex-col space-y-2">
          {role === 'admin' ? (
            <>
              <li className="flex items-center p-2 border-2 border-black">
                <FaHome className="text-xl" />
                <NavLink to="/" className="ml-2">
                  Back Home
                </NavLink>
              </li>
              <li className="flex items-center p-2 border-2 border-black">
                <MdOutlineSpaceDashboard className="text-xl" />
                <NavLink to="/dashboard" className="ml-2">
                  Admin Dashboard
                </NavLink>
              </li>
              <li className="flex items-center p-2 border-2 border-black">
                <FaUsersCog className="text-xl" />
                <NavLink to="/dashboard/manage" className="ml-2">
                  Manage Users
                </NavLink>
              </li>
              <li className="flex items-center p-2 border-2 border-black">
                <MdApproval className="text-base" />
                <NavLink to="/dashboard/approvedPremium" className="ml-2">
                  Approved Premium
                </NavLink>
              </li>
              <li className="flex items-center p-2 border-2 border-black">
                <MdOutlineContactPhone className="text-xl" />
                <NavLink to="/dashboard/approvedContactRequest" className="ml-2">
                  Approved Contact Request
                </NavLink>
              </li>
              <li className="flex items-center p-2 border-2 border-black">
                <GiClover className="text-xl" />
                <NavLink to="/dashboard/successStory" className="ml-2">
                  Success Story
                </NavLink>
              </li>
              <li className="flex items-center p-2 border-2 border-black">
                <MdLogout className="text-xl" />
                <button onClick={logOut} className="ml-2">
                  Log Out
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="flex items-center p-2 border-2 border-black">
                <FaHome className="text-xl" />
                <NavLink to="/" className="ml-2">
                  Back Home
                </NavLink>
              </li>
              <li className="flex items-center p-2 border-2 border-black">
                <FaEdit className="text-xl" />
                <NavLink to="/dashboard" className="ml-2">
                  User Dashboard
                </NavLink>
              </li>
              <li className="flex items-center p-2 border-2 border-black">
                <FaEdit className="text-xl" />
                <NavLink to="/dashboard/editBiodata" className="ml-2">
                  Edit Biodata
                </NavLink>
              </li>
              <li className="flex items-center p-2 border-2 border-black">
                <FaUserCircle className="text-xl" />
                <NavLink to="/dashboard/viewBiodata" className="ml-2">
                  View Biodata
                </NavLink>
              </li>
              <li className="flex items-center p-2 border-2 border-black">
                <FaPhone className="text-base" />
                <NavLink to="/dashboard/myContactRequest" className="ml-2">
                  My Contact Request
                </NavLink>
              </li>
              <li className="flex items-center p-2 border-2 border-black">
                <FaBookmark className="text-xl" />
                <NavLink to="/dashboard/favouritesBiodata" className="ml-2">
                  Favorites Biodata
                </NavLink>
              </li>
              <li className="flex items-center p-2 border-2 border-black">
                <GiLovers className="text-xl" />
                <NavLink to="/dashboard/gotMarried" className="ml-2">
                  Got Married
                </NavLink>
              </li>
              <li className="flex items-center p-2 border-2 border-black">
                <MdLogout className="text-xl" />
                <button onClick={logOut} className="ml-2">
                  Log Out
                </button>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Outlet --> Dynamic content */}
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
