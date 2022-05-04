import React from "react"
import { Link } from "react-router-dom"
import "./Components.templates.Navbar.styles.css"
import { ArrowDown } from "./Icons"

function Navbar() {
    return (
        <React.Fragment>
            <div className="blur-nav"></div>
            <nav id="navbar">
                <section className="nav-text">
                    <Link className="link" to="/">Homepage</Link>
                    <Link className="link" to="/post">Sell</Link>
                    <Link className="link" to="/complete">Cart</Link>
                    <Link className="link" to="/profile">Profile</Link>
                </section>
                <section id="trapezoid">
                    <ArrowDown className="show-menu" />
                </section>
            </nav>
        </React.Fragment>
    )
}

export default Navbar;
