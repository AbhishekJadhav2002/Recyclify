import React from "react"
import './Components.Orders.styles.css';
import Orders from './Components/Orders';
import Filter from './Components/Filter';

function OrdersPage() {
  const [displayFilter, setDisplayFilter] = React.useState(false);

  return (
    <div className="ordersPage">
      {displayFilter && <Filter></Filter>}
      <Orders toggleFilter={setDisplayFilter} ></Orders>
    </div>
  );
}

export default OrdersPage;
