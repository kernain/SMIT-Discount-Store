import WelcomScreen from "../pages/Welcome";
import Signup from "./../pages/Signup";
import Login from "./../pages/Login";
import UserHome from "./../pages/UserHome";
import AdminProductUpload from "../pages/AdminProductUpload";
import AdminHome from "./../pages/adminHome";
import AdminOrders from "../pages/AdminOrders";
import AccountSettings from "../pages/AccountSettings";
import UserSetting from "../pages/UserSetting/index"
import UserCart from "./../pages/UserCart"

import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Router = () => {



  const isAuthenticated = useSelector(state => state.isAuthLoggedIn)
  const isAdminLoggedIn = useSelector(state => state.isAdminLoggedIn)



  const router = createBrowserRouter([
    {
      path: "/",
      element: <WelcomScreen />,
    },
    {
      path: "/Signup",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/userHome",
      element: isAuthenticated ? <UserHome /> : <Login />,
    },
    {
      path: "/adminProductUpload",
      element: isAdminLoggedIn ? <AdminProductUpload /> : <Login />,
    },
    {
      path: "/adminHome",
      element: isAdminLoggedIn ? <AdminHome /> : <Login />,
    },
    {
      path: "/adminOrders",
      element: isAdminLoggedIn ? <AdminOrders /> : <Login />,
    },
    {
      path: "/adminAccountSettings",
      element: isAdminLoggedIn ? <AccountSettings /> : <Login />,
    },
    {
      path: "/userSetting",
      element: isAuthenticated ? <UserSetting /> : <Login />,
    },
    {
      path: "/userCart",
      element: isAuthenticated ? <UserCart /> : <Login />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Router;
