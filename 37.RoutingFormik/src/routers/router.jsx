import AdminRoot from "../pages/admin/adminRoot";
import Dashboard from "../pages/admin/dashboard";
import UsersAbout from "../pages/admin/usersAbout";
import Home from "../pages/home";
import Login from "../pages/user/login";
import Product from "../pages/user/product";
import UserRoot from "../pages/user/userRoot";

export const routes = [
  {
    path: "/",
    element: <UserRoot />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "/admin",
        element: <Dashboard />,
      },
      {
        path: "/admin/userabout",
        element: <UsersAbout />,
      },
    ],
  },
];
