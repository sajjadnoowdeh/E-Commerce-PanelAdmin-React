import Home from "../pages/home/Home";
import UserList from "../pages/userList/UserList";
import User from "../pages/user/User";
import NewUser from "../pages/newUser/NewUser";
import ProductList from "../pages/productList/ProductList";
import Product from "../pages/product/Product";
import NewProduct from "../pages/newProduct/NewProduct";

import Layout from "../components/Layout/Layout";
import Login from "../pages/login/Login";
export const routersDashboard = [
  { path: "/login", element: <Login /> },
  { path: "/", element: <Home /> },
  {
    path: "/dashborad",
    element: <Layout />,
    children: [
      { path: "/users", element: <UserList /> },
      { path: "/user/:userId", element: <User /> },
      { path: "/newUser", element: <NewUser /> },
      { path: "/products", element: <ProductList /> },
      { path: "/product/:productId", element: <Product /> },
      { path: "/newProduct", element: <NewProduct /> },
    ],
  },
];
