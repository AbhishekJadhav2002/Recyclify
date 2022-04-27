import React from "react"
import "./Components.Homepage.WhyToRecycle.styles.css"

function WhyToRecycle(props) {
    const cardDelays = [-1, 0, 1, 2, 2]

    const Y2UseCards = props.data.map((card, index) => (
        <React.Fragment key={index}>
            <div className="iframe-card willChange" style={{ "--delay": cardDelays[index] }} >
                <iframe src={card.videoURL} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <div className="card">
                    <div className="Y2Use-desc">
                        <h3>{card.title}</h3>
                        <p>{card.desc}</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    ))

    return (
        <div id="WhyToRecycle" className="container">
            <h1 className="titleStick">Why To Recycle</h1>
            <div className="Y2Use-flex-wrapper">
                {Y2UseCards}
            </div>
        </div>
    )
}

export default WhyToRecycle;