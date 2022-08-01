import React from "react"
import "./Components.Homepage.WorkingSteps.styles.css"
import StepInTheProcess from "./StepInTheProcess"
import StepData_imgURL_1 from "../Images/Working-step-1.jpg"
import StepData_imgURL_2 from "../Images/Working-step-1.jpg"
import StepData_imgURL_3 from "../Images/Working-step-1.jpg"
import StepData_imgURL_4 from "../Images/Working-step-1.jpg"
import StepData_imgURL_5 from "../Images/Working-step-1.jpg"

function WorkingSteps(props) {
    const stepsBackgroundImages = [StepData_imgURL_1, StepData_imgURL_2, StepData_imgURL_3, StepData_imgURL_4, StepData_imgURL_5]

    const stepsList = props.data.map((eachStep, index) => (
        <StepInTheProcess
            key={index + 1}
            stepNumber={index + 1}
            backgroundImage={stepsBackgroundImages[index]}
            thisStep={eachStep}
        />
    ))

    return (
        <div id="Working" className="container working-container">
            <h1 className="titleStick">How it's Work!</h1>
            {stepsList}
        </div>
    )
}

export default WorkingSteps;