import React from 'react'
import '../Components.Cart.styles.css'
import axios from 'axios'
import { useGlobalContext } from '../../Services/context';
import SingleCurrentOrder from "./SingleCurrentOrder"
import EmptyOrders from "./EmptyCart"
import EmptyCart from './EmptyCart';

function CurrentOrders() {
  const { userObject, pastOrders, updatePastOrders } = useGlobalContext();

  React.useEffect(() => {
    async function getPastOrdersFromAPI() {
      try {
        const userPastOrders =
          await axios.post("https://sleepy-oasis-89356.herokuapp.com/api/order/completedorders", JSON.stringify({
            "id": userObject._id,
          }), {
            headers: {
              "Content-Type": "application/JSON",
            }
          })
        console.log(userPastOrders.data)
        updatePastOrders(userPastOrders.data)
      } catch (error) {
        console.log(error)
      }
    }
    getPastOrdersFromAPI();
  }, [])

  return (
    <>
      {pastOrders.length === 0 ? <EmptyCart userType={userObject.userType}></EmptyCart> :
        pastOrders.map((val) => (
          <div className='grid-2'>
            <div key={val.ID}>
              <SingleCurrentOrder orders={val}></SingleCurrentOrder>
            </div>
          </div>
        ))}
    </>
  )
}

export default CurrentOrders;
