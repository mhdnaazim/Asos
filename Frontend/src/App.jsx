import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MenLanding from "./User/Men/MenLanding";
import WomenLanding from "./User/Women/WomenLanding";
import { StoreProvider } from "./Context/StoreContext";

const App = () => {
  return (
    <>
      <StoreProvider>
        <BrowserRouter>
        <Routes>

          {/* Men  */}
          <Route path="/" element={<MenLanding />}/>

          {/* Women  */}
          <Route path="/women" element={<WomenLanding />} />

        </Routes>
      </BrowserRouter>
      </StoreProvider>
    </>
  )
}

export default App;