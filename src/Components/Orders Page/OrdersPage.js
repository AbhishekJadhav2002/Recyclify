import React from "react"
import './Components.Orders.styles.css';
import Orders from './Components/Orders';
import Filter from './Components/Filter';

function OrdersPage() {
  return (
    <div>
      <Filter></Filter>
      <Orders></Orders>
    </div>
  );
}

export default OrdersPage;
