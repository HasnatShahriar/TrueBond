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
import PrivateRoute from "./PrivateRoute";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import GotMarried from "../pages/Dashboard/GotMarried/GotMarried";
import ApprovedPremium from "../pages/Dashboard/ApprovedPremium/ApprovedPremium";
import ApprovedContactRequest from "../pages/Dashboard/ApprovedContactRequest/ApprovedContactRequest";
import AdminDashboard from "../pages/Dashboard/AdminDashboard/AdminDashboard";
import Checkout from "../pages/Checkout/Checkout";
import UserDashboard from "../pages/Dashboard/UserDashboard/UserDashboard";
import AdminSuccessStory from "../pages/Dashboard/AdminSuccessStory/AdminSuccessStory";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import DashboardHome from "../components/DashboardHome/DashboardHome";
import AdminRoute from "./AdminRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/biodatas",
        element: <Biodatas />
      },
      {
        path: "/biodatas/:id",
        element: <PrivateRoute><BiodataDetails /></PrivateRoute>,
        loader: ({ params }) => fetch(`/biodatas/${params.id}`)
      },
      {
        path: "/about",
        element: <AboutUs />
      },
      {
        path: "/contact",
        element: <ContactUs />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: '/register',
        element: <Registration />
      },
      {
        path: "/checkout/:id",
        element: <Checkout />,
        loader: ({ params }) => fetch(`/biodatas/${params.id}`)
      }
    ]
  },
  {
    path: "dashboard",
    element: <PrivateRoute> <Dashboard /></PrivateRoute>,
    children: [
      // normal user routes
      {
        index: true,
        // path: '',
        element: <DashboardHome />
      },
      {
        path: "userDashboard",
        element: <UserDashboard/>
      },
      {
        path: "editBiodata",
        element: <EditBiodata />
      },
      {
        path: "viewBiodata",
        element: <ViewBiodata />
      },
      {
        path: "myContactRequest",
        element: <MyContactRequest />
      },
      {
        path: "favouritesBiodata",
        element: <FavouritesBiodata />
      },
      {
        path: "gotMarried",
        element: <GotMarried />
      },
      // admin routes

      {
        path: "dashboard",
        element: <AdminDashboard />
      },
      {
        path: "manage",
        element: <AdminRoute><ManageUsers /></AdminRoute>
      },
      {
        path: "approvedPremium",
        element: <AdminRoute><ApprovedPremium /></AdminRoute>
      },
      {
        path: "approvedContactRequest",
        element: <AdminRoute><ApprovedContactRequest /></AdminRoute>
      },
      {
        path: "successStory",
        element: <AdminRoute><AdminSuccessStory /></AdminRoute>
      }
    ]
  }
]);

export default router;