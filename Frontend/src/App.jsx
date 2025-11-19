import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MenLanding from "./User/Men/MenLanding";
import WomenLanding from "./User/Women/WomenLanding";
import { StoreProvider } from "./Context/StoreContext";
import SignUp from "./User/Components/SignUp";
import Login from "./User/Components/Login";
import Dashboard from './Admin/Dashboard'
import UserEdit from "./Admin/UserEdit";

const App = () => {
  return (
    <>
      <StoreProvider>
        <BrowserRouter>
        <Routes>

          {/* Components  */}
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          {/* Men  */}
          <Route path="/" element={<MenLanding />}/>

          {/* Women  */}
          <Route path="/women" element={<WomenLanding />} />

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