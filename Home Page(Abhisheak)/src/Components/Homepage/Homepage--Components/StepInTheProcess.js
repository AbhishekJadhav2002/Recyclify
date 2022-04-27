import React from "react"

function StepInTheProcess(props) {
    return (
        <div className={`stepInTheProcess step-${props.stepNumber}`}>
            <div><span>{props.stepNumber}</span></div >
            <img src={props.backgroundImage} alt={`${props.thisStep.title}-unloaded`} />
            <h2>{props.thisStep.title}</h2>
            <p>{props.thisStep.desc}</p>
        </div >
    )
}

export default StepInTheProcess;