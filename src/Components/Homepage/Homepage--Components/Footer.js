import React from "react"
import "./Components.Homepage.Footer.styles.css"
import { CollegeLocationIcon, ContactPhoneIcon, EmailIcon, InstagramIcon, LinkedinIcon, GitHubIcon, ProjectReportIcon } from "../../templates/Icons"

function Footer(props) {
    return (
        <div className="footer">
            <div className="footerBackground">
                <svg viewBox="0 0 1000 100" preserveAspectRatio="none" style={{ height: "100%", width: "100%" }}><path d="M0.00,49.98 C150.00,150.00 349.81,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: "none", fill: "rgba(225, 239, 246, 0.7)" }}></path>
                </svg>
            </div>
            <footer className="footer-distributed">

                <div className="footer-left">
                    <h3>Waste <span>Management</span></h3>
                    <p className="footer-links">
                        <a href="#Home" className="link-1">Home</a>
                        <a href="#WhyToRecycle">Videos</a>
                        <a href="#Pricing">Pricing</a>
                        <a href="#Working">Working</a>
                        <a href="#Faq">FAQ</a>
                        <a href="tel: +917030405299">Contact</a>
                    </p>
                    <p className="footer-project-name">PBL Project (F-10-04) © 2022</p>
                </div>

                <div className="footer-center">
                    <div>
                        <a href={props.data.links.collegeLocation}>
                            {/* <i className="fa fa-map-marker willChange"></i> */}
                            <CollegeLocationIcon className={"willChange"} />
                            <p><span>PICT, Pune</span>Maharashtra, India</p>
                        </a>
                    </div>
                    <div>
                        <a href={"tel: " + props.data.phoneNumber}>
                            <ContactPhoneIcon className={"willChange"} />
                            {/* <i className="fa fa-phone willChange"></i> */}
                            <p><abbr title="Calling Abhishek Jadhav 📞...">Call Us | {props.data.phoneNumber}</abbr></p>
                        </a>
                    </div>
                    <div>
                        <a href={"mailto: " + props.data.email}>
                            <EmailIcon className={"willChange"} />
                            {/* <i className="fa fa-envelope willChange"></i> */}
                            <p>{props.data.email}</p>
                        </a>
                    </div>
                </div>

                <div className="footer-right">
                    <p className="footer-project-about">
                        <span>About the project</span>
                        {props.data.aboutProject}
                    </p>
                    <div className="footer-icons">
                        <div className="iconsBar iconsBar-black-line iconsGap-20">
                            <a href={props.data.links.instagram}>
                                <InstagramIcon className={"willChange"} />
                                {/* <i className="fab fa-instagram"></i> */}
                            </a>
                            <a href="#">
                                <ProjectReportIcon className={"willChange"} />
                                {/* <i className="fa fa-twitter"></i> */}
                            </a>
                            <a href={props.data.links.linkedin}>
                                <LinkedinIcon className={"willChange"} />
                                {/* <i className="fa fa-linkedin"></i> */}
                            </a>
                            <a href={props.data.links.github}>
                                <GitHubIcon className={"willChange"} />
                                {/* <i className="fa fa-github"></i> */}
                            </a>
                        </div>
                    </div>
                </div>

            </footer >
        </div >
    )
}

export default Footer;