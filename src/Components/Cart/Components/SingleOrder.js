import React from 'react'
import { RiDeleteBin6Fill } from "react-icons/ri"
import { useGlobalContext } from '../../Services/context';


function SingleOrder(props) {
  const { ID, PhoneNo, Address, ApproxQuantity, Img, Items, Date } = props.cartOrders;
  const { updateCartOrders } = useGlobalContext();

  return (
    <div>
      <div className="order">
        <div className="orderImgContainer">
          <img src={Img} alt="" />
        </div>
        <div className="order-data">
          <div className="orderItems">
            <span className="green"> Items:</span>{Items}</div>
          <div className="orderAddress">
            <span className="green"> Address:</span>{Address}</div>
          <div className="orderPhone">
            <span className="green"> Phone Number:</span> {PhoneNo}</div>
          <div className="orderQuantity"><span className="green">Quantity:</span> {ApproxQuantity}</div>
        </div>
        <div className="delete-btn-container">
          <button className="orderDelete" onClick={() => {
            updateCartOrders(ID)
          }} > <RiDeleteBin6Fill></RiDeleteBin6Fill></button>
        </div>
      </div>
    </div>
  )
}

export default SingleOrder;
