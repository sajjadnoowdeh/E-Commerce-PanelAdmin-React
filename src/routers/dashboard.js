import React from "react";
const Home = React.lazy(() => import("../pages/home/Home"));
const UserList = React.lazy(() => import("../pages/userList/UserList"));
const User = React.lazy(() => import("../pages/user/User"));
const NewUser = React.lazy(() => import("../pages/newUser/NewUser"));
const ProductList = React.lazy(() =>
  import("../pages/productList/ProductList")
);
const Product = React.lazy(() => import("../pages/product/Product"));
const NewProduct = React.lazy(() => import("../pages/newProduct/NewProduct"));
const Layout = React.lazy(() => import("../components/Layout/Layout"));
const Login = React.lazy(() => import("../pages/login/Login"));
export let routers = [
  { path: "/login", element: <Login /> },
  {
    element: <Layout />,

    children: [
      { index: true, element: <Home /> },
      { path: "users", element: <UserList /> },
      { path: "user/:userId", element: <User /> },
      { path: "newUser", element: <NewUser /> },
      { path: "products", element: <ProductList /> },
      { path: "product/:productId", element: <Product /> },
      { path: "newProduct", element: <NewProduct /> },
    ],
  },
];
