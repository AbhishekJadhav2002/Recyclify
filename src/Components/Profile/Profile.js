import React from "react"
import "./Components.Profile.styles.css"
import { useGlobalContext } from "../Services/context"
import AuthenticationForms from "../templates/AuthenticationForms/AuthenticationForms"
import Header from "./Components/Header"
import PageContent from "./Components/PageContent"
import Footer from "../Homepage/Homepage--Components/Footer"
import { FooterData } from "../../Data"

function Profile() {
    const { userObject } = useGlobalContext();

    return (
        <React.Fragment>
            {userObject !== null ?
                <>
                    <Header data={userObject} />
                    <PageContent data={userObject} />
                    <Footer data={FooterData} />
                </>
                :
                <AuthenticationForms previousRoute={"/profile"}/>
            }
        </React.Fragment>
    )
}

export default Profile;
