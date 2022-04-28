import logo from './logo.svg';
import './App.css';
import Buttons from "./Components/Buttons"
import CartOrders from './Components/CartOrders';
import PastOrders from './Components/PastOrders'
import EmptyCart from './Components/EmptyCart';
import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { useGlobalContext} from './Services/context';
import CurrentOrders from './Components/CurrentOrders';

function App() {

  const {orders}=useGlobalContext();

  return (

<>
  <BrowserRouter>
  <Buttons></Buttons>
  <Routes>
        <Route path="/cart" element={orders.length!==0?<CartOrders/>:<EmptyCart/>} />
        <Route path="/orders" element={<CurrentOrders/>} />
        <Route path="/pastOrders" element={<PastOrders/>} />
      </Routes>
  

  </BrowserRouter>
   
    </>
  );
}

export default App;
