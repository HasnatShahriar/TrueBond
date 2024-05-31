import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-336.6px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;