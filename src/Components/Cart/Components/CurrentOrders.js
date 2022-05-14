import React from 'react'
import '../Components.Cart.styles.css'
import axios from 'axios'
import { useGlobalContext } from '../../Services/context';
import SingleCurrentOrder from "./SingleCurrentOrder"
import EmptyCart from './EmptyCart';

function CurrentOrders() {
  const { userObject, pastOrders, updatePastOrders, incompleteOrders, updateIncompleteOrders } = useGlobalContext();

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
        updatePastOrders(userPastOrders.data)
        const userIncompleteOrders =
          await axios.post("https://sleepy-oasis-89356.herokuapp.com/api/order/incompleteorders", JSON.stringify({
            "id": userObject._id,
          }), {
            headers: {
              "Content-Type": "application/JSON",
            }
          })
        updateIncompleteOrders(userIncompleteOrders.data)
      } catch (error) {
        console.log(error)
      }
    }
    getPastOrdersFromAPI();
  }, [])

  const completedOrdersGridArray = pastOrders.map((val) => (
    <div>
      <div key={val.ID}>
        <SingleCurrentOrder orders={val}></SingleCurrentOrder>
      </div>
    </div>
  ))

  const incompleteOrdersGridArray = incompleteOrders.map((val) => (
    <div>
      <div key={val.ID}>
        <SingleCurrentOrder orders={val}></SingleCurrentOrder>
      </div>
    </div>
  ))

  const userOrCollector = userObject.userType === 'user' ?
    <>
      <div className="grid-2">
        {pastOrders === [] ? <h3>No Completed Orders</h3> : completedOrdersGridArray}
      </div>
      <hr></hr>
      <h2>Pending Orders</h2>
      <div className="grid-2">
        {incompleteOrders === [] ? <h3>No Pending Orders</h3> : incompleteOrdersGridArray}
      </div>
    </>
    :
    <>
      <div className="grid-2">
        {pastOrders === [] ? <h3>No Completed Orders</h3> : completedOrdersGridArray}
      </div>
    </>

  return (
    <div className="orderBody">
      {userObject.userType === "user" ? <h2>Completed Orders</h2> : <h2>Purchased Orders</h2>}
      {userOrCollector}
    </div>
  )
}

export default CurrentOrders;
