import React, { useState, useEffect, useReducer, useContext,  } from "react";
import { Data } from "./MockData";
import { default as Reducer} from "./reducer";

const AppContext = React.createContext();

const initialState = {
  loading: false,
  total: 0,
  amount: 0,
  cart: Data
}



const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [state, dispatch] = useReducer(Reducer, initialState);


  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const add = (id) => {
    dispatch({ type: 'ADD', payload: id })
  }

  const remove = (id) => {
    dispatch({ type: 'REMOVE', payload: id })
  }

  const increase = (id) => {
    dispatch({ type: 'INCREASE', payload: id })
  }

  const decrease = (id) => {
    dispatch({ type: 'DECREASE', payload: id })
  }
  // const fetchData = async () => {
  //   dispatch({ type: 'LOADING' })
  //   const response = await fetch("https://fakestoreapi.com/products")
  //   const cart = await response.json()
  //   dispatch({ type: 'DISPLAY_ITEMS', payload: cart })
  // }

  const toggleAmount = (id, type) => {
    dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } })
  }

  // useEffect(() => {
  //   fetchData()
  // }, [])

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' })
  }, [state.cart])

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        ...state,
        clearCart,
        remove,
        add,
        increase,
        decrease,
        toggleAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
