import React from 'react'
import axios from "axios"
import { useGlobalContext } from '../../Services/context'
import { GiShoppingCart } from 'react-icons/gi';
// import { AiOutlineShoppingCart } from "react-icons/ai"
// import { IconContext } from "react-icons"
import img from "./ireland.jpeg"
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Orders() {
  const { userObject, orders, updateOrders } = useGlobalContext();

  let ordersFetchingToastID;
  let buyingToastID;

  async function buyOrder(id) {
    buyingToastID = toast.loading("Just a moment, placing order...");
    try {
      await axios.patch("https://sleepy-oasis-89356.herokuapp.com/api/order/ordercomplete", JSON.stringify({
        "id": id,
        "collectorId": userObject._id
      }), {
        headers: {
          "Content-Type": "application/JSON",
        }
      })
    } catch (error) {
      console.log(error)
    }
    let newOrder = orders.filter((val) => {
      return val._id !== id;
    })
    updateOrders(newOrder)
    toast.update(buyingToastID, { render: "Successfully placed order !", type: "success", isLoading: false, autoClose: "800" })
  }

  React.useEffect(() => {
    async function getOrdersFromAPI() {
      try {
        const userOrders =
          await axios.post("https://sleepy-oasis-89356.herokuapp.com/api/order/orderBycity", JSON.stringify({
            "id": userObject._id
          }), {
            headers: {
              "Content-Type": "application/JSON",
            }
          })
        userOrders.length ?? (ordersFetchingToastID = toast.loading("Getting available orders..."))
        updateOrders(userOrders.data)
        toast.update(ordersFetchingToastID, { render: "Let's Recycle !", type: "success", isLoading: false, autoClose: "800" })
      } catch (error) {
        console.log(error)
      }
    }
    getOrdersFromAPI();
  }, [])

  return (
    <div>
      <ToastContainer />
      {orders.length === 0 ? <div className='empty-cart'><div className='empty-cart-icon'><GiShoppingCart></GiShoppingCart></div><div className='empty-cart-text'>No orders available to buy 🥲 </div></div> :
        orders.map((val) => {
          return (
            <div key={val._id} className="order">
              <div className="order-grid grid-4">
                <div className="order-img-container">
                  <img onClick={(e) => {
                    window.open(e.target.src, '_blank');
                  }} src={img} className="order-img" alt="logo" />
                </div>
                <div className="customer-data">
                  <h3> <span className='green'> Ordered On : </span>{val.date.substring(0, 10)}</h3>
                  <h3> <span className="green">Phone No:</span> <span className="shade">{val.phone}</span></h3>
                  <h3><span className="green">Address:</span>{val.address}</h3>
                </div>
                <div className="order-details">
                  <h3><span className="green">Type:</span>{val.productType}</h3>
                  <h3><span className="green">Approx Quantity:</span>{val.quantity + " Kg"}</h3>
                  <h3><span className="green">Items:</span>{val.items}</h3>
                </div>
                <div className="buy-button-container">
                  <button className='buy-button' onClick={() => buyOrder(val._id)}>BUY</button>
                  <br />
                  {/* <IconContext.Provider value={{ size: "1rem" }}>
                  <button className='cart-button'>ADD TO CART <AiOutlineShoppingCart></AiOutlineShoppingCart></button>
                </IconContext.Provider> */}
                </div>
              </div>
            </div>
          )
        })}
    </div >
  )
}

export default Orders;
