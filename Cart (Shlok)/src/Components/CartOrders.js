import React  from 'react'
import { useGlobalContext} from '../Services/context';
import SingleOrder from './SingleOrder';

function Orders() {
 
    
const {orders}=useGlobalContext();
 
    return (
   <div className='grid-2'>
 {orders.map((val)=>{
   
   return(
   <div key={val.ID}>
    <SingleOrder orders={val}></SingleOrder>
   </div>)
   })}
</div>
)
}


export default Orders