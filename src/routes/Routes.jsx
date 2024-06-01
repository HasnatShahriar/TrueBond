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