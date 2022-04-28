import React, { useState, useContext, useEffect } from 'react'
import data from "../data"

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  

const [orders, setOrders] = useState(data);

//delete

const updateOrders=(id)=>{

  setOrders(orders.filter((val)=>{

    return val.ID!==id;

  }))
}

const [del, setDel] = useState(false);

  return (
    <AppContext.Provider
      value={{ orders , updateOrders}}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
