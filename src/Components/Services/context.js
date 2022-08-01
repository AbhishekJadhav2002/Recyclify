import React, { useState, useContext, useEffect } from 'react'
import OrdersData from "../Orders Page/OrdersData"
import CartData from "../Cart/CartData"

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [userObject, setUser] = useState(JSON.parse(localStorage.getItem("userObjectStored")) ?? null)
  const [cartOrders, setCartOrders] = useState(CartData);
  const [filter, setFilter] = useState('All')
  const [orders, setOrders] = useState([])
  const [pastOrders, setPastOrders] = useState([])

  // useEffect(() => {
  //   if (filter === "All") {
  //     setOrders(OrdersData);
  //   }
  //   else {
  //     setOrders(OrdersData.filter((val) => {
  //       return val.Type === filter;
  //     }))
  //   }
  // }, [filter])

  // useEffect(() => {
  //   const isLogIn = localStorage.getItem("userObjectStored")
  //   if (isLogIn !== null) {
  //     setUser(JSON.parse(isLogIn))
  //   }
  // }, [])

  const updateCartOrders = (id) => {
    setCartOrders(cartOrders.filter((val) => {
      return val.ID !== id;
    }))
  }

  const setLoggedInUser = (responsedUserData) => {
    setUser(responsedUserData.data)
    localStorage.setItem("userObjectStored", JSON.stringify(responsedUserData.data));
  }

  const logOut = () => {
    localStorage.clear();
  }

  const updateFilter = (value) => {
    setFilter(value);
  }

  const updateOrders = (value) => {
    setOrders(value);
  }

  const updatePastOrders = (value) => {
    setPastOrders(value);
  }

  return (
    <AppContext.Provider
      value={{ userObject, logOut, orders, updateOrders, pastOrders, updatePastOrders, cartOrders, updateCartOrders, updateFilter, setLoggedInUser }}
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
