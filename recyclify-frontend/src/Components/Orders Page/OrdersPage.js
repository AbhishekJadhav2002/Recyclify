import React from "react"
import './Components.Orders.styles.css';
import Filter from './Components/Filter';
import Orders from './Components/Orders';


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
