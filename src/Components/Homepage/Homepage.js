import React from "react"
import "./Components.Homepage.style.css"
import { useGlobalContext } from "../Services/context"
import { Link } from "react-router-dom"
import { StepsData, FeaturesData, WhyRecycleData, FAQs, FooterData } from "../../Data"
import AuthenticationForms from '../templates/AuthenticationForms/AuthenticationForms'
import WorkingSteps from "./Homepage--Components/WorkingSteps"
import Features from "./Homepage--Components/Features"
import FAQ from "./Homepage--Components/FAQs"
import WhyToRecycle from "./Homepage--Components/WhyToRecycle"
import Footer from "./Homepage--Components/Footer"

function Homepage() {
    const [authenticationModal, setSignUpState] = React.useState(false)

    const { userObject } = useGlobalContext()

    const [isLoggedIn, setIsLogin] = React.useState(false)

    React.useEffect(() => {
        setIsLogin(userObject === null ? false : true)
    }, [userObject])


    function toggleModal() {
        setSignUpState(previousState => !previousState)
    }

    return (
        <div id="Home" className="homepage">
            {(!isLoggedIn && authenticationModal) && <AuthenticationForms onButtonClick={() => toggleModal()} />}
            <div className="header-container">
                <div className="header-background"></div>
                <div className="header-content">
                    <h1 className="willChange">Plastic and E-waste Recycling Services</h1>
                    <p>Upload your household waste and get them exchanged with a worthwhile amount from a collector who will ensure a environment friendly recycling.</p>
                    {isLoggedIn ?
                        <button className="btn"><Link to={userObject.userType === "user" ? "/sell" : "/buy"}>Let's Start</Link></button> :
                        <button className="btn" onClick={() => toggleModal()} data-hover="Login / Sign In"><div>Get Started</div></button>
                    }
                </div>
                <div className="shopping-img"></div>
            </div>
            <WorkingSteps data={StepsData} />
            <Features data={FeaturesData} />
            <WhyToRecycle data={WhyRecycleData} />
            <FAQ data={FAQs} />
            <Footer data={FooterData} />
            {/* <Blob /> */}
            {/* <div className="working-container">
                <h1>How it's Works !</h1>
                <section className="items-flex">
                    <div className="item item-1">
                        <h3>Collection</h3>
                        <p>Collecting recyclable plastics from the user</p>
                    </div>
                    <div className="item item-2">
                        <h3>Collection</h3>
                        <p>Collecting recyclable plastics from the user</p>
                    </div>
                    <div className="item item-3">
                        <h3>Collection</h3>
                        <p>Collecting recyclable plastics from the user</p>
                    </div>
                    <div className="item item-4">
                        <h3>Collection</h3>
                        <p>Collecting recyclable plastics from the user</p>
                    </div>
                    <div className="item item-5">
                        <h3>Collection</h3>
                        <p>Collecting recyclable plastics from the user</p>
                    </div>
                </section>
            </div> */}
        </div>
    )
}

export default Homepage;
