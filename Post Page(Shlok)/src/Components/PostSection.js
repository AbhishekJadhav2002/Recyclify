import React from 'react'
import imgUrl from "../Images/recycle.png"
import {AiOutlineUpload} from "react-icons/ai"

function PostSection() {
  return (
    <>
    <div className="grid-2">

    <div className="img-container">
      <img src={imgUrl} alt="" className="form-img" />
    </div>
    <div>
    
    <form >
    
    <div className="postEle">
    <label className='postLabel' htmlFor="">Item-Type</label>
    <select name="type" id="cars">
       
       <option value="Plastic">Plastic</option>
       <option value="E-Waste">E-Waste</option>
       </select>
    <br />
    </div>
    
    <div className="postEle">
    <label className='postLabel' htmlFor="">Items</label>
    <input  className='postInput' type="text" />
    <br />
    </div>
    
    <div className="postEle">
    <label className='postLabel' htmlFor="">Quantity</label>
    <div className="">
    <input className='postInput quantityInput' type="text" /> <select name="type" id="cars">
       
       <option value="Plastic">Kg</option>
       <option value="E-Waste">Quantity</option>
       </select>
       </div>
       <br />
       </div>
    
    
    
       <div className="postEle">
    <label className='postLabel' htmlFor="">Delivery Address</label>
    <input className='postInput' type="text" disabled/>
    <br />
    </div>
    
    
    <div className="postEle">
    <label className='postLabel'  htmlFor="">Phone no</label>
    <input className='postInput' type="text" disabled />
    </div>
    
    <div className="postButtonGrid">
    
    
    
    <div className="button-container">
      <button  className="uploadImage">Upload Image <AiOutlineUpload></AiOutlineUpload></button>
      </div>
    
      
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

export default PostSection