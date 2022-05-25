import React from 'react'
import { useGlobalContext } from "../../Services/context"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import imgUrl from "../Images/recycle.png"
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function PostSection() {
  const { userObject } = useGlobalContext();

  const redirectToHome = useNavigate()

  const [order, setOrder] = React.useState({
    userID: userObject._id,
    productType: "",
    items: "",
    quantity: "0",
    address: "",
    city: "",
    phone: userObject.phone
  })

  let toastID;

  async function postDetailsToAPI() {
    try {
      const response = await axios.post("https://sleepy-oasis-89356.herokuapp.com/api/order/placeOrder", JSON.stringify(order), {
        headers: {
          "Content-Type": "application/JSON",
        }
      })
      setTimeout(() => { setOrder(order) }, 800)
      response.status === "OK" ? toast.update(toastID, { render: "Successfully posted order !", type: "success", isLoading: false, autoClose: "800" }) : toast.update(toastID, { render: "Failed posting request !", type: "error", isLoading: false, autoClose: "800" })
    } catch (error) {
      console.log(error)
    }
  }

  function HandlePostOrder(event) {
    event.preventDefault()
    const validateQuantity = order.quantity
    var f = true;
    if (validateQuantity.length === 1 && validateQuantity[0] === '0') {
      alert("Quantity must be non-zero")
    }
    else {
      for (let i = 0; i < validateQuantity.length; i++) {
        if (!(validateQuantity[i] >= '0' && validateQuantity[i] <= '9')) {
          f = false;
          break;
        }
      }
      if (f === false) {
        alert("Quantity Must be numeric value")
      }
      else {
        toastID = toast.loading("Posting request...")
        postDetailsToAPI()
        setTimeout(() => { redirectToHome("/complete-orders") }, 1000)
      }
    }
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
          <ToastContainer />
          <img src={imgUrl} alt="" className="form-img" />
        </div>
        <div>
          <form onSubmit={HandlePostOrder} >
            <div className="postEle">
              <label className='postLabel' name="productType" htmlFor="">Item-Type</label>
              <select name="productType" onChange={onFieldsChange} value={order.productType} required>
                <option value="">Select</option>
                <option value="Plastic">Plastic</option>
                <option value="E-Waste">E-Waste</option>
              </select>
              <br />
            </div>
            <div className="postEle">
              <label className='postLabel' htmlFor="">Items</label>
              <input className='postInput' type="text" name="items" required onChange={onFieldsChange} value={order.items} />
              <br />
            </div>
            <div className="postEle">
              <label className='postLabel' htmlFor="">Quantity</label>
              <div className="">
                <input className='postInput quantityInput' type="text" name="quantity" required onChange={onFieldsChange} value={order.quantity} /> <select name="type" id="cars">
                  <option value="Kg">Kg</option>
                  <option value="">Nos</option>
                </select>
              </div>
              <br />
            </div>
            <div className="postEle">
              <label className='postLabel' htmlFor="">Pickup Address</label>
              <input className='postInput' type="text" name="address" value={order.address} required onChange={onFieldsChange} />
              <br />
            </div>
            <div className="postEle">
              <label className='postLabel' htmlFor="">City</label>
              <input className='postInput' type="text" name="city" value={order.city} required onChange={onFieldsChange} />
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
