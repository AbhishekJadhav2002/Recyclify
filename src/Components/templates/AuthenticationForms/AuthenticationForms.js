import React from "react"
import { useGlobalContext } from '../../Services/context';
import axios from "axios"
import SignUp from "./SignUp"
import LogIn from "./LogIn"
import "./AuthenticationForms.style.component.css"

function AuthenticationForms(props) {
    const { loggedInUser } = useGlobalContext();

    const [loginDetails, setLoginDetails] = React.useState({
        email: "",
        password: ""
    })

    const [signUpDetails, setSignUpDetails] = React.useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        password: "",
        isUser: true
    })

    const [isSignUp, setIsSignIn] = React.useState(true)

    // React.useEffect(() => {

    // }, [])

    async function postDetailsToAPI() {
        if (isSignUp) {
            try {
                const response = await axios.post("https://sleepy-oasis-89356.herokuapp.com/api/auth/signup", JSON.stringify(signUpDetails), {
                    headers: {
                        "Content-Type": "application/JSON",
                    }
                })
                loggedInUser(response.data)
                localStorage.setItem("userLoginKey", response.data.token);
            } catch (error) {
                console.log(error)
            }
        } else {
            try {
                const response = await axios.post("https://sleepy-oasis-89356.herokuapp.com/api/auth/login", JSON.stringify(loginDetails), {
                    headers: {
                        "Content-Type": "application/JSON",
                    }
                })
                loggedInUser(response.data)
                localStorage.setItem("userLoginKey", response.data.token);
            } catch (error) {
                console.log(error)
            }
        }
    }

    function handleSubmit(event) {
        postDetailsToAPI()
        event.preventDefault();
    }

    function handleInputFields(event) {
        isSignUp ?
            setSignUpDetails(prevState => {
                let isUser = signUpDetails.isUser;
                if (event.target.name === "isUser") {
                    isUser = !signUpDetails.isUser;
                }
                return {
                    ...prevState,
                    [event.target.name]: event.target.value,
                    "isUser": isUser
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