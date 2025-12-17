import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StoreProvider } from "./Context/StoreContext";
import MenLanding from "./User/Men/MenLanding";
import WomenLanding from "./User/Women/WomenLanding";
import SignUp from "./User/Components/SignUp";
import Login from "./User/Components/Login";
import Dashboard from './Admin/Dashboard'
import UserEdit from "./Admin/UserEdit";
import Cart from "./User/Components/Cart";
import Profile from "./User/Components/Profile";
import ProductView from "./User/Components/ProductView";
import MenProducts from "./User/Men/MenProducts";
import WomenProducts from "./User/Women/WomenProducts";
import WomenProductView from "./User/Women/WomenProductView";
import Checkout from "./User/Components/Checkout";
import Products from "./User/Components/Products";

const App = () => {
  return (
    <>
      <StoreProvider>
        <BrowserRouter>
        <Routes>

          {/* Components  */}
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/search-results" element={<Products />} />

          {/* Men  */}
          <Route path="/" element={<MenLanding />}/>
          <Route path="/menProducts" element={<MenProducts />}/>
          <Route path="/detail/:id" element={<ProductView />} />

          {/* Women  */}
          <Route path="/women" element={<WomenLanding />} />
          <Route path="/womenProducts" element={<WomenProducts />} />
          <Route path="/womenProductDetail/:id" element={<WomenProductView />} />

          {/* Admin  */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/edit/:id" element={<UserEdit />} />

        </Routes>
      </BrowserRouter>
      </StoreProvider>
    </>
  )
}

export default App;