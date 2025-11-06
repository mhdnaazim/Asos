import { createContext, useContext, useState } from "react";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {

  const [showSale, setShowSale] = useState(false);

  return (
    <StoreContext.Provider value={{
         showSale, 
         setShowSale 
         }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext)
