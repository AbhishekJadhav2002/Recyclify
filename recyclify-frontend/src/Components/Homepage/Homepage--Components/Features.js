import React from "react"
import "./Components.Homepage.Features.styles.css"
import Feature from "./Feature"
import mobile_frame from "../Images/feature-IphoneX-transparent-Frame.png"
import ss_homepage from "../Images/feature-0.png"
import ss_0 from "../Images/feature-0.png"
import ss_1 from "../Images/feature-1.png"
import ss_2 from "../Images/feature-2.png"

function Features(props) {
    const [featuresState, setFeaturesState] = React.useState(() => {
        return props.data.map(featureObj => ({
            ...featureObj,
            isSelected: false
        }))
    })

    const [featureSS, setFeatureSS] = React.useState(ss_homepage)

    const featureScreenshotsArray = [ss_0, ss_1, ss_2]

    function handleFeatureClick(id) {
        setFeaturesState(prevState => (prevState.map(feature => {
            let bool = false
            if (feature.id === id && !feature.isSelected) {
                bool = !feature.isSelected
                setFeatureSS(featureScreenshotsArray[feature.id])
            }
            return {
                ...feature,
                isSelected: bool
            }
        })))
    }

    const renderFeatures = featuresState.map((data) => (
        <Feature
            key={data.id}
            selectMe={() => handleFeatureClick(data.id)}
            data={data}
        />
    ))

    return (
        <div id="Profile" className="container">
            <h1 className="titleStick">Features</h1>
            <div className="features-container">
                <div className="features-mobile">
                    <img src={mobile_frame} alt="Mobile-outer-frame" />
                    <img className="feature-ss" src={featureSS} alt="Mobile-screenshots" />
                </div>
                <div className="features-details">
                    {renderFeatures}
                </div>
            </div>
        </div>
    )
}

export default Features;