import React from 'react'
import {BsCartFill} from "react-icons/bs"
import {AiOutlineHistory} from "react-icons/ai"
import {MdDeliveryDining} from "react-icons/md"
import { Link } from 'react-router-dom'

function Buttons() {
  return (
    <>
      <div className="cartButtons grid-3">

<div className="button-container">
<Link to="/" className='cartButton'> Cart <BsCartFill></BsCartFill></Link>
</div>

<div className="button-container">
<Link to="/orders" className='ordersButton'> Orders <MdDeliveryDining></MdDeliveryDining></Link>
</div>

<div className="button-container">
<Link to="/pastOrders" className='historyButton'>Orders History <AiOutlineHistory ></AiOutlineHistory></Link>
</div>

</div>

    </>
  )
}

export default Buttons