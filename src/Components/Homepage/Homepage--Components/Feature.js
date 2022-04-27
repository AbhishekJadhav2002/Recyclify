import React from "react"

function Feature(props) {
    return (
        <React.Fragment>
            <div
                className={props.data.isSelected ? "feature feature-selected" : "feature"}
                onClick={props.selectMe} /*Ig Warning at this line, because at this line only, onClick is used : Expected `onClick` listener to be a function, instead got a value of `string` type*/
            >
                <h3>{props.data.title}</h3>
                <p>{props.data.desc}</p>
            </div>
            <div className="feature feature-mobile-version">
                <details>
                    <summary><h3>{props.data.title}</h3></summary>
                    <div>{props.data.desc}</div>
                </details>
            </div>
        </React.Fragment>
    )
}

export default Feature;