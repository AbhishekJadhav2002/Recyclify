import React from "react"
import { GoogleIcon } from "../../Icons"
import "./AuthenticationForms.style.component.css"

function SignIn(props) {
    return (
        <React.Fragment>
            <form className="box" onSubmit={props.handleSubmit}>
                <div className="inputBox">
                    <input
                        className={props.userDetails.firstname === "" ? "inputFilled" : "inputNotFilled"}
                        type="text"
                        name="firstname"
                        id="firstname"
                        required
                        onChange={props.handleInputFields}
                        value={props.userDetails.firstname} />
                    <label htmlFor="firstname">First Name</label>
                </div>
                <div className="inputBox">
                    <input
                        className={props.userDetails.lastname === "" ? "inputFilled" : "inputNotFilled"}
                        type="text"
                        name="lastname"
                        id="lastname"
                        required
                        onChange={props.handleInputFields}
                        value={props.userDetails.lastname} />
                    <label htmlFor="lastname">Last Name</label>
                </div>
                <div className="inputBox" id="emailContainer">
                    <input
                        className={props.userDetails.email === "" ? "inputFilled" : "inputNotFilled"}
                        type="email"
                        name="email"
                        id="email"
                        required
                        onChange={props.handleInputFields}
                        value={props.userDetails.email} />
                    <label htmlFor="email">Email</label>
                </div>
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
                </div>
                <div className="iconsBar iconsBar-black-line">
                    <a href="https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin">
                        <GoogleIcon className="willChange" />
                        {/* <i className="fab fa-google"></i> */}
                        <p>Sign in with Google</p>
                    </a>
                </div>
                <input type="submit" name="sign-un" value="Sign Up" />
            </form>
        </React.Fragment>
    )
}

export default SignIn;