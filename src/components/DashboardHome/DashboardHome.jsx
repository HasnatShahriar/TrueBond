import useRole from "../../hooks/useRole";
import AdminDashboard from "../../pages/Dashboard/AdminDashboard/AdminDashboard";
import UserDashboard from "../../pages/Dashboard/UserDashboard/UserDashboard";



const DashboardHome = () => {
  const [role] = useRole();
  console.log(role);
  return (
    <>
      {/* {
        role === 'admin' ? <AdminDashboard/> : <UserDashboard/>
      }  */}

      {
        role === 'admin' && <AdminDashboard/>
      }
      {
        role === 'normal' && <UserDashboard/>
      }
      {
        role === 'premium' && <UserDashboard/>
      }
    </>
  );
};

export default DashboardHome;