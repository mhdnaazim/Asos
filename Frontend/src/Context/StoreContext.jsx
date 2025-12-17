// ==================== FILE 1: StoreContext.js ====================

import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {

  const URL = import.meta.env.VITE_API_URL;
  const [showSale, setShowSale] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const handleFetchCartCount = async () => {
    try {
      const res = await axios.get(`${URL}/cart/getCart`);
      setCartCount(res.data.length)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleFetchCartCount()
  }, []);

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