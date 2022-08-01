import React from 'react'
import { GiShoppingCart } from 'react-icons/gi';

function EmptyCart(props) {
  return (
    <div className='empty-cart'>
      <div className='empty-cart-icon'>
        <GiShoppingCart></GiShoppingCart>
      </div>
      <div className='empty-cart-text'>No {props.userType === "user" ? "completed" : "purchased"} orders 🥲 </div>
    </div>
  )
}

export default EmptyCart;
