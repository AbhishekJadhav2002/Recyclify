import React from 'react'
// import { useGlobalContext } from '../../context';
import "../Components.Cart.styles.css"
import Img from "../../Orders Page/Components/ireland.jpeg"

function SingleCurrentOrder(props) {
  // const { updateOrders, orders } = useGlobalContext();
  const { phone, address, quantity, items, date } = props.orders;

  return (
    <div>
      <div className="cart-orders">
        <div className="orderImgContainer">
          <img src={Img} alt="" />
        </div>
        <div className="order-data">
          <div className="orderItems">
            <span className="green"> Items:</span>{items}</div>
          <div className="orderAddress">
            <span className="green"> Address:</span>{address}</div>
          <div className="orderPhone">
            <span className="green"> Phone Number:</span> {phone}</div>
          <div className="orderDate"><span className='green'> Ordered On:</span>{date}</div>
          <div className="orderQuantity"><span className="green">Quantity:</span> {quantity}</div>
        </div>
        <div className="delete-btn-container">
        </div>
      </div>
    </div>
  )
}

export default SingleCurrentOrder;
