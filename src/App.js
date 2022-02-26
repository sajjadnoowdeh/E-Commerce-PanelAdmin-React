import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./app.style.css";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Layout from "./components/Layout/Layout";
import Login from "./pages/login/Login";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="users" element={<UserList />} />
            <Route path="user/:userId" element={<User />} />
            <Route path="newUser" element={<NewUser />} />
            <Route path="products" element={<ProductList />} />
            <Route path="product/:productId" element={<Product />} />
            <Route path="newProduct" element={<NewProduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
