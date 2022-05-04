import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import Navbar from "./Components/templates/Navbar"
import Homepage from "./Components/Homepage/Homepage"
import Profile from "./Components/Profile/Profile"
import OrdersPage from "./Components/Orders Page/OrdersPage"
import PostsPage from "./Components/Post Page/PostsPage"
import CartPage from "./Components/Cart/CartPage"
import CartOrders from "./Components/Cart/Components/CartOrders"
import PastOrders from "./Components/Cart/Components/PastOrders"
import CurrentOrders from "./Components/Cart/Components/CurrentOrders"

function App() {
	return (
		<React.Fragment>  {/**Using React.Fragment instead of common div, because somehow div was affecting the width of viewport and was disturbing the alignment🥲 */}
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/buy" element={<OrdersPage />} />
					<Route path="/post" element={<PostsPage />} />
					<Route path="/complete-orders" element={<CurrentOrders />} />
					<Route path="/pending-orders" element={<PastOrders />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="*" element={<h1>Error : 404</h1>} />
				</Routes>
			</BrowserRouter>
			{/* <Homepage /> */}
			{/* <Profile /> */}
			{/* <OrdersPage />
			<PostsPage />
			<CartPage /> */}
		</React.Fragment>
	);
}

export default App;
