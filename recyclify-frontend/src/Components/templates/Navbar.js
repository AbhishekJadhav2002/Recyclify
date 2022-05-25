import React from "react"
import { useGlobalContext } from "../Services/context"
import { Link } from "react-router-dom"
import "./Components.templates.Navbar.styles.css"
import { ArrowDown } from "./Icons"


function Navbar() {
    const { userObject, logOut } = useGlobalContext();

    return (
        <React.Fragment>
            <div className="blur-nav">
                {userObject ? <main>
                    <div className="profile-bar">
                        <p>{userObject.name}</p>
                        <button type="submit"><i className="profile-icon"></i></button>
                    </div>
                </main> : ''}
            </div>
            <nav id="navbar">
                <section className="nav-text">
                    <Link className="link" to="/">Homepage</Link>
                    {userObject !== null ?
                        (userObject.userType === "user" ?
                            <><Link className="link" to="/sell">Sell</Link> <Link className="link" to="/complete-orders">My Orders</Link>
                                <Link className="link" to="/profile">Profile</Link>
                                <Link className="link" to="/" onClick={() => { window.location.reload(); logOut() }}>Log Out</Link>
                            </>
                            :
                            <><Link className="link" to="/buy">Buy</Link> <Link className="link" to="/complete-orders">My Orders</Link>
                                <Link className="link" to="/profile">Profile</Link>
                                <Link className="link" to="/" onClick={() => { window.location.reload(); logOut() }}>Log Out</Link>
                            </>
                        ) :
                        <>
                            <Link className="link" to="/auth">Login</Link>
                            <Link className="link" to="/about">About</Link>
                        </>
                    }
                </section>
                <section id="trapezoid">
                    <ArrowDown className="show-menu" />
                </section>
            </nav>
        </React.Fragment>
    )
}

export default Navbar;
