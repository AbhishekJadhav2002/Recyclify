import React from 'react'
import axios from 'axios'
import { useGlobalContext } from '../../Services/context';
import SingleCurrentOrder from "./SingleCurrentOrder"

function CurrentOrders() {
  const { userObject, pastOrders, updatePastOrders } = useGlobalContext();

  React.useEffect(() => {
    async function getPastOrdersFromAPI() {
      try {
        const userPastOrders =
          await axios.post("https://sleepy-oasis-89356.herokuapp.com/api/order/userOrders", JSON.stringify({
            userID: userObject._id,
          }), {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            }
          })
        // const userPastOrders =
        //   await axios.get("https://sleepy-oasis-89356.herokuapp.com/api/order/userOrders")
        updatePastOrders(userPastOrders.data)
      } catch (error) {
        console.log(error)
      }
    }
    getPastOrdersFromAPI();
  }, [])

  return (
    <div className='grid-2'>
      {pastOrders.map((val) => {
        return (
          <div key={val.ID}>
            <SingleCurrentOrder orders={val}></SingleCurrentOrder>
          </div>
        )
      })}
    </div>
  )
}

export default CurrentOrders;
