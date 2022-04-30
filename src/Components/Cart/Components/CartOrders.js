import React from 'react'
import { useGlobalContext } from '../../Services/context';
import EmptyCart from './EmptyCart';
import SingleOrder from './SingleOrder';

function Orders() {
  const { orders } = useGlobalContext();

  if (orders.length === 0) {
    return <EmptyCart></EmptyCart>
  }

  return (
    <div className='grid-2'>
      {orders.map((val) => {
        return (
          <div key={val.ID}>
            <SingleOrder orders={val}></SingleOrder>
          </div>
        )
      })}
    </div>
  )
}

export default Orders;
