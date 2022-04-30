import React from 'react'
// import { useGlobalContext } from '../../context';

function SingleCurrentOrder(props) {
  // const { updateOrders, orders } = useGlobalContext();
  const { PhoneNo, Address, ApproxQuantity, Img, Items, OrderedDate } = props.orders;

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
          <div className="orderDate"><span className='green'> Ordered On:</span>{OrderedDate}</div>
          <div className="orderQuantity"><span className="green">Quantity:</span> {ApproxQuantity}</div>
        </div>
        <div className="delete-btn-container">
        </div>
      </div>
    </div>
  )
}

export default SingleCurrentOrder;
