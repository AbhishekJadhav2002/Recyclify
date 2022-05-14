import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import Navbar from "./Components/templates/Navbar"
import { useGlobalContext } from "../src/Components/Services/context"
import Homepage from "./Components/Homepage/Homepage"
import LoginPage from "./Components/Login Page/LoginPage"
import Profile from "./Components/Profile/Profile"
import OrdersPage from "./Components/Orders Page/OrdersPage"
import PostsPage from "./Components/Post Page/PostsPage"
// import CartPage from "./Components/Cart/CartPage"
// import CartOrders from "./Components/Cart/Components/CartOrders"
import PastOrders from "./Components/Cart/Components/PastOrders"
import CurrentOrders from "./Components/Cart/Components/CurrentOrders"

function App() {
	const { userObject } = useGlobalContext()

	return (
		<React.Fragment>  {/**Using React.Fragment instead of common div, because somehow div was affecting the width of viewport and was disturbing the alignment🥲 */}
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/auth" element={<LoginPage />} />
					<Route path="/buy" element={userObject ? <OrdersPage /> : <LoginPage previousLink="/buy" />} />
					<Route path="/sell" element={userObject ? <PostsPage /> : <LoginPage previousLink="/sell" />} />
					<Route path="/complete-orders" element={userObject ? <CurrentOrders /> : <LoginPage previousLink="/complete-orders" />} />
					<Route path="/pending-orders" element={userObject ? <PastOrders /> : <LoginPage previousLink="/pending-orders" />} />
					<Route path="/profile" element={userObject ? <Profile /> : <LoginPage previousLink="/profile" />} />
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
