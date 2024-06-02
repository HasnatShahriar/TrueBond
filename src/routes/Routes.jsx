import { createBrowserRouter } from "react-router-dom";
import Home from './../pages/Home/Home/Home';
import Main from "../layouts/Main";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Dashboard from "../layouts/Dashboard";
import EditBiodata from "../pages/Dashboard/EditBiodata/EditBiodata";
import ViewBiodata from "../pages/Dashboard/ViewBiodata/ViewBiodata";
import MyContactRequest from './../pages/Dashboard/MyContactRequest/MyContactRequest';
import FavouritesBiodata from "../pages/Dashboard/FavouritesBiodata/FavouritesBiodata";
import Biodatas from "../pages/Biodatas/Biodatas";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import BiodataDetails from "../components/SectionTitle/BiodataDetails/BiodataDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/biodatas",
        element: <Biodatas/>
      },
      {
        path: "/biodatas/:id",
        element: <BiodataDetails/>,
        loader: ({ params }) => fetch(`/biodatas/${params.id}`)
      },
      {
        path: "/about",
        element: <AboutUs/>
      },
      {
        path: "/contact",
        element: <ContactUs/>
      },
      {
        path: "login",
        element: <Login/>
      },
      {
        path: '/register',
        element: <Registration/>
      },
    ]
  },
  {
    path: "dashboard",
    element: <Dashboard/>,
    children: [
      {
        path: "editBiodata",
        element: <EditBiodata/>
      },
      {
        path: "viewBiodata",
        element: <ViewBiodata/>
      },
      {
        path: "myContactRequest",
        element: <MyContactRequest/>
      },
      {
        path: "favouritesBiodata",
        element: <FavouritesBiodata/>
      }
    ]
  }
]);

export default router;