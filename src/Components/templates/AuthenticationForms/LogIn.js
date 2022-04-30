import React from "react"
import { GoogleIcon } from "../Icons"
import "./AuthenticationForms.style.component.css"

function LogIn(props) {
    return (
        <React.Fragment>
            <form className="box" onSubmit={props.handleSubmit}>
                <div className="inputBox">
                    <input
                        className={props.userDetails.username === "" ? "inputFilled" : "inputNotFilled"}
                        type="username"
                        name="username"
                        id="username"
                        required
                        onChange={props.handleInputFields}
                        value={props.userDetails.username} />
                    <label htmlFor="username">Username</label>
                </div>
                <div className="inputBox">
                    <input
                        className={props.userDetails.password === "" ? "inputFilled" : "inputNotFilled"}
                        type="password"
                        name="password"
                        id="password"
                        required
                        onChange={props.handleInputFields}
                        value={props.userDetails.password} />
                    <label htmlFor="password">Password</label>
                    <a href="./log-in/forgot-password">Forgot Password ?</a>
                </div>
                <div className="iconsBar iconsBar-black-line">
                    <a href="https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin">
                        <GoogleIcon className="willChange" />
                        {/* <i className="fab fa-google"></i> */}
                        <p>Log in with Google</p>
                    </a>
                </div>
                <input type="submit" name="log-in" value="Log In" />
            </form>
        </React.Fragment>
    )
}

export default LogIn;