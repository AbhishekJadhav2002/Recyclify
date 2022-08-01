import React from "react"
import './Components.Orders.styles.css';
import Filter from './Components/Filter';
import Orders from './Components/Orders';


function OrdersPage() {
  return (
    <div className="ordersPage">
      <Filter></Filter>
      <Orders></Orders>
    </div>
  );
}

export default OrdersPage;
