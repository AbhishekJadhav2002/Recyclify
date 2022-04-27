import React from "react"
import SignUp from "./SignUp"
import LogIn from "./LogIn"
import "./AuthenticationForms.style.component.css"

function AuthenticationForms(props) {
    const [loginDetails, setLoginDetails] = React.useState({
        username: "",
        password: ""
    })

    const [signUpDetails, setSignUpDetails] = React.useState({
        firstname: "",
        lastname: "",
        email: "",
        username: "",
        password: ""
    })

    const [isSignUp, setIsSignIn] = React.useState(true)

    function handleSubmit(event) {
        console.log(signUpDetails, loginDetails)
        event.preventDefault();
    }

    function handleInputFields(event) {
        isSignUp ?
            setSignUpDetails(prevState => {
                return {
                    ...prevState,
                    [event.target.name]: event.target.value
                }
            })
            :
            setLoginDetails(prevState => {
                return {
                    ...prevState,
                    [event.target.name]: event.target.value
                }
            })

    }

    function toggleSignUpLoginModal(event) {
        setIsSignIn(!isSignUp)
    }

    const signUpOrLogInForm =
        isSignUp ?
            <SignUp userDetails={signUpDetails} handleSubmit={handleSubmit} handleInputFields={handleInputFields} />
            :
            <LogIn userDetails={loginDetails} handleSubmit={handleSubmit} handleInputFields={handleInputFields} />

    const headerText = isSignUp ?
        <p>Already have an account ? <span onClick={toggleSignUpLoginModal}>Log In</span></p>
        :
        <p>Don't have an account ? <span onClick={toggleSignUpLoginModal}>Create account</span></p>

    return (
        <React.Fragment>
            <button className="modalCloseButton" onClick={props.onButtonClick}></button>
            <div className="authenticationContainer">
                <div className="modalBackground"></div>
                <div className={isSignUp ? "modal modalForSignUpForm" : "modal"}>
                    <div className="heading">
                        <h2>Hey! Welcome to the better place 🙌</h2>
                        {headerText}
                    </div>
                    {signUpOrLogInForm}
                </div>
            </div>
        </React.Fragment >
    );
}

export default AuthenticationForms;