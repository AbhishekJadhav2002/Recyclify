import React from "react"
import "./AuthenticationForms.style.component.css"

function SignIn(props) {
    return (
        <React.Fragment>
            <form className="box" onSubmit={props.handleSubmit}>
                <div className="inputBox">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        autoComplete="autoComplete_off_randomString"
                        onChange={props.handleInputFields}
                        value={props.userDetails.name} />
                    <label htmlFor="name">Name</label>
                </div>
                <div className="inputBox">
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        required
                        autoComplete="autoComplete_off_randomString"
                        onChange={props.handleInputFields}
                        value={props.userDetails.phone} />
                    <label htmlFor="phone">Phone No</label>
                </div>
                <div className="inputBox" id="emailContainer">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        autoComplete="autoComplete_off_randomString"
                        onChange={props.handleInputFields}
                        value={props.userDetails.email} />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="inputBox">
                    <input
                        type="text"
                        name="city"
                        id="city"
                        required
                        autoComplete="autoComplete_off_randomString"
                        onChange={props.handleInputFields}
                        value={props.userDetails.city} />
                    <label htmlFor="city">City</label>
                </div>
                <div className="inputBox">
                    <input
                        type="password"
                        name="password"
                        id="password"
                        required
                        autoComplete="autoComplete_off_randomString"
                        onChange={props.handleInputFields}
                        value={props.userDetails.password} />
                    <label htmlFor="password">Password</label>
                </div>
                {/* <div className="iconsBar iconsBar-black-line">
                    <a href="https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin">
                        <GoogleIcon className="willChange" />
                        <i className="fab fa-google"></i>
                        <p>Sign in with Google</p>
                    </a>
                </div> */}
                <button name="isUser" onClick={props.handleInputFields} className={!props.userDetails.isUser ? "isUserButton" : "isUserButton isUser"} value="Joining as a Recycler ?" >Joining as a Recycler ?</button>
                <input type="submit" name="sign-un" value="Sign Up" />
            </form>
        </React.Fragment>
    )
}

export default SignIn;