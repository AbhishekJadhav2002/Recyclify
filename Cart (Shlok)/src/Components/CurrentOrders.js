import React  from 'react'
import { useGlobalContext} from '../Services/context';
import SingleOrder from './SingleOrder';
import SingleCurrentOrder from "./SingleCurrentOrder"


function CurrentOrders() {

          
const {orders}=useGlobalContext();
  
  return (
<div className='grid-2'>
{orders.map((val)=>{

return(
<div key={val.ID}>
 <SingleCurrentOrder orders={val}></SingleCurrentOrder>
</div>)
})}
</div>
)
}


export default CurrentOrders