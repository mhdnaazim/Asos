import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MenLanding from "./User/Men/MenLanding";
import WomenLanding from "./User/Women/WomenLanding";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>

          {/* Men  */}
          <Route path="/" element={<MenLanding />}/>

          {/* Women  */}
          <Route path="/women" element={<WomenLanding />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;