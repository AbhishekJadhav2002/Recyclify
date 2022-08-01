import React from "react"
import "./Components.Homepage.FAQs.styles.css"
import { FAQExpandIcon } from "../../templates/Icons"

function FAQ(props) {
    const faqArray = props.data.map(faqData => (
        <React.Fragment key={faqData.id}>
            <details>
                <summary>
                    <h4 className="willChange">{faqData.question}</h4>
                    <FAQExpandIcon className="willChange" />
                    {/* <i className="far fa-plus-square willChange"></i> */}
                </summary>
                <p className="willChange">{faqData.answer}</p>
            </details>
        </React.Fragment>
    ))

    return (
        <div id="Faq" className="container">
            <h1 className="titleStick">FAQs</h1>
            <p>Frequently Asked Questions</p>
            <div className="FAQs-container">
                <div className="row">
                    {faqArray.slice(0, 3)}
                </div>
                <div className="row">
                    {faqArray.slice(3, 6)}
                </div>
            </div>
        </div>
    )
}

export default FAQ;