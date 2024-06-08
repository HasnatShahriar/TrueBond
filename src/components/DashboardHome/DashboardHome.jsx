import useRole from "../../hooks/useRole";
import AdminDashboard from "../../pages/Dashboard/AdminDashboard/AdminDashboard";



const DashboardHome = () => {
  const [role] = useRole();
  console.log(role);
  return (
    <>
      {
        role === 'admin' && <AdminDashboard/> 
      } 
    </>
  );
};

export default DashboardHome;