// ==================== FILE 1: StoreContext.js ====================

import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {

  const URL = import.meta.env.VITE_API_URL;
  const [showSale, setShowSale] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const {id} = useParams()

    const handleFetchCartCount = async () => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    if (!loggedUser) return;

    try {
      const res = await axios.get(`${URL}/cart/getCartItems/${loggedUser.userid}`);
      setCartCount(res.data.length);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetchCartCount()
  }, [id]);

  return (
    <StoreContext.Provider value={{
      showSale,
      setShowSale,
      cartCount,
      handleFetchCartCount,
      searchTerm,
      setSearchTerm
    }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext)