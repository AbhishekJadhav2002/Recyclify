import React from 'react'
import { useGlobalContext } from "../../Services/context"
import axios from "axios"
import imgUrl from "../Images/recycle.png"

function PostSection() {
  const { userObject } = useGlobalContext();

  const [order, setOrder] = React.useState({
    userId: [userObject._id],
    productType: "",
    items: "",
    quantity: "0",
    address: "",
    city: ""
  })

  async function postDetailsToAPI() {
    try {
      const response = await axios.post("https://sleepy-oasis-89356.herokuapp.com/api/order/placeOrder", JSON.stringify(order), {
        headers: {
          "Content-Type": "application/JSON",
        }
      })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  function HandlePostOrder(event) {
    setOrder(order)
    event.preventDefault()
    postDetailsToAPI()
    console.log(order)
  }

  function onFieldsChange(event) {
    setOrder(prevOrder => ({
      ...prevOrder,
      [event.target.name]: event.target.value
    }))
  }

  return (
    <>
      <div className="grid-2">
        <div className="img-container">
          <img src={imgUrl} alt="" className="form-img" />
        </div>
        <div>
          <form onSubmit={HandlePostOrder} >
            <div className="postEle">
              <label className='postLabel' name="productType" htmlFor="">Item-Type</label>
              <select name="productType" onChange={onFieldsChange} value={order.productType}>
                <option value="">Select</option>
                <option value="Plastic">Plastic</option>
                <option value="E-Waste">E-Waste</option>
              </select>
              <br />
            </div>
            <div className="postEle">
              <label className='postLabel' htmlFor="">Items</label>
              <input className='postInput' type="text" name="items" onChange={onFieldsChange} value={order.items} />
              <br />
            </div>
            <div className="postEle">
              <label className='postLabel' htmlFor="">Quantity</label>
              <div className="">
                <input className='postInput quantityInput' type="text" name="quantity" onChange={onFieldsChange} value={order.quantity} /> <select name="type" id="cars">
                  <option value="Kg">Kg</option>
                  <option value="">Quantity</option>
                </select>
              </div>
              <br />
            </div>
            <div className="postEle">
              <label className='postLabel' htmlFor="">Delivery Address</label>
              <input className='postInput' type="text" name="address" value={order.address} onChange={onFieldsChange} />
              <br />
            </div>
            <div className="postEle">
              <label className='postLabel' htmlFor="">City</label>
              <input className='postInput' type="text" name="city" value={order.city} onChange={onFieldsChange} />
              <br />
            </div>
            <div className="postButtonGrid">
              {/* <div className="button-container">
                <button className="uploadImage">Upload Image <AiOutlineUpload></AiOutlineUpload></button>
              </div> */}
              <div className="button-container">
                <button className="postButton">Place Order</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default PostSection;
