import React from 'react'

import { useGlobalContext} from '../Services/context'
import {AiOutlineShoppingCart} from "react-icons/ai"
import { IconContext } from "react-icons";

function Orders() {

    const {orders}=useGlobalContext();

  return (
    <div>

{orders.map((val)=>{
   const {ID,CustomerName,PhoneNo,Address,ApproxQuantity,Img,Items,Type}=val;

   return (
 
    <div key={ID} className="order">

    <div className="order-grid grid-4">
   
      <div className="order-img-container">
      <img onClick={(e)=>{
        window.open(e.target.src, '_blank');
        
      }} src={Img} className="order-img"  alt="logo" /> 
      </div>

      <div className="customer-data">
        
        <h3> <span className='green'> Customer Name : </span>{CustomerName}</h3>
        <h3> <span className="green">Phone No:</span> <span className="shade">{PhoneNo}</span></h3>
        <h3><span className="green">Address:</span>{Address}</h3>
        
      </div>

      <div className="order-details">
        <h3><span className="green">Type:</span>{Type}</h3>
        <h3><span className="green">Approx Quantity:</span>{ApproxQuantity}</h3>
        <h3><span className="green">Items:</span>{Items}</h3>
     
      </div>

      <div className="buy-button-container">
   <button className='buy-button'>BUY</button>
   <br />

   <IconContext.Provider value={{size:"1rem"}}>
     <button className='cart-button'>ADD TO CART <AiOutlineShoppingCart></AiOutlineShoppingCart></button>
   </IconContext.Provider>
   </div>
    </div>


    </div>    
    
   )

 })}


    </div>
  )
}

export default Orders