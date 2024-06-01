import { createBrowserRouter } from "react-router-dom";
import Home from './../pages/Home/Home/Home';
import Main from "../layouts/Main";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";

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
]);

export default router;