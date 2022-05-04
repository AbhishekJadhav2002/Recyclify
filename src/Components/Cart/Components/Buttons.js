import React from 'react'
import { BsCartFill } from "react-icons/bs"
import { AiOutlineHistory } from "react-icons/ai"
import { MdDeliveryDining } from "react-icons/md"
import { Link } from 'react-router-dom'

function Buttons() {
  return (
    <React.Fragment>
      <div className="cartButtons grid-3">
        <div className="button-container">
          <Link to="/cart/cart-orders" className='cartButton'> Cart <BsCartFill></BsCartFill></Link>
        </div>
        <div className="button-container">
          <Link to="/cart/ordered" className='ordersButton'> Ordered <MdDeliveryDining></MdDeliveryDining></Link>
        </div>
        <div className="button-container">
          <Link to="/cart/past-orders" className='historyButton'>Orders History <AiOutlineHistory ></AiOutlineHistory></Link>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Buttons;
