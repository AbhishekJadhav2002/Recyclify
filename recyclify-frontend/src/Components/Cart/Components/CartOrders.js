import React from 'react'
import { useGlobalContext } from '../../Services/context';
import EmptyCart from './EmptyCart';
import SingleOrder from './SingleOrder';

function Orders() {
  const { cartOrders } = useGlobalContext();

  if (cartOrders.length === 0) {
    return <EmptyCart></EmptyCart>
  }

  return (
    <div className='grid-2'>
      {cartOrders.map((val) => {
        return (
          <div key={val.ID}>
            <SingleOrder cartOrders={val}></SingleOrder>
          </div>
        )
      })}
    </div>
  )
}

export default Orders;
