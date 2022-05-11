import React from "react"
import { useGlobalContext } from "../Services/context"
import { useNavigate } from "react-router-dom"
import AuthenticationForms from "../templates/AuthenticationForms/AuthenticationForms"

function LoginPage(props) {
    const { userObject } = useGlobalContext()

    const redirectToHome = useNavigate()

    React.useEffect(() => {
        if (userObject !== null) {
            if (redirectToHome) {
                redirectToHome(props.previousLink ? props.previousLink : "/")
            }
        }
    })

    return (
        <React.Fragment>
            <AuthenticationForms></AuthenticationForms>
        </React.Fragment>
    )
}

export default LoginPage;
