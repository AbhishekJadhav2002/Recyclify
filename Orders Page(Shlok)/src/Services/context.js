import React, { useState, useContext, useEffect } from 'react'
import data from "../data"

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  
  
const [filter, setFilter] = useState('All')
const [orders, setOrders] = useState(data)
useEffect(() => {
 

if(filter==="All"){
  setOrders(data);
}

else{
  setOrders(data.filter((val)=>{
    return val.Type===filter;
  }))
}

}, [filter])
 
const updateFilter=(value)=>{
  setFilter(value);
}

  return (
    <AppContext.Provider
      value={{ orders ,updateFilter}}
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
