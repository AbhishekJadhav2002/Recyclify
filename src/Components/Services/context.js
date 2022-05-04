import React, { useState, useContext, useEffect } from 'react'
import OrdersData from "../Orders Page/OrdersData"
import CartData from "../Cart/CartData"

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [cartOrders, setCartOrders] = useState(CartData);
  const [filter, setFilter] = useState('All')
  const [orders, setOrders] = useState(OrdersData)
  const [userID, setUserID] = useState({});

  useEffect(() => {
    if (filter === "All") {
      setOrders(OrdersData);
    }
    else {
      setOrders(OrdersData.filter((val) => {
        return val.Type === filter;
      }))
    }
  }, [filter])

  const updateCartOrders = (id) => {
    setCartOrders(cartOrders.filter((val) => {
      return val.ID !== id;
    }))
  }

  const loggedInUser = (responsedUserData) => {
    setUserID(responsedUserData)
  }

  const updateFilter = (value) => {
    setFilter(value);
  }

  return (
    <AppContext.Provider
      value={{ userID, orders, cartOrders, updateCartOrders, updateFilter, loggedInUser }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider };
