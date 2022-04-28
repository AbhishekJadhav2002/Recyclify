import React from 'react'
import {GiShoppingCart} from 'react-icons/gi';
function EmptyCart() {
  return (
    <div>
<div className='empty-cart-icon'>
    <GiShoppingCart></GiShoppingCart>
</div>

<div className='empty-cart-text'>Cart Empty </div>
    </div>
  )
}

export default EmptyCart