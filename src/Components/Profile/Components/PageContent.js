import React from "react"
import { Link } from "react-router-dom"

function PageContent(props) {
    return (
        <div className="profile-details-container">
            <div className="profile-details-flex">
                <div className="profile-card-view">
                    <div className="profile-card">
                        <div className="profile-row">
                            <img src="https://i.pinimg.com/originals/ef/0e/a4/ef0ea49004626663c05332b66966179c.png" alt="profile" />
                        </div>
                        <div className="profile-card-body">
                            <div className="profile-row">
                                <div className="profile-card-body-stats">
                                    <div>
                                        <span className="numbers">0</span>
                                        <span className="desc">Orders</span>
                                    </div>
                                    <div>
                                        <span className="numbers">0</span>
                                        <span className="desc">Pending</span>
                                    </div>
                                    <div>
                                        <span className="numbers">0</span>
                                        <span className="desc">Completed</span>
                                    </div>
                                </div>
                            </div>
                            <div className="profile-card-body-fields">
                                <h3>
                                    {props.data.name}<span>, 19</span>
                                </h3>
                                <h5>{props.data.city}</h5>
                                <h5 className="userType">{props.data.userType === "user" ? "INDIVIDUAL" : "COLLECTOR"}</h5>
                                <div>{props.data.userType === "user" ? props.data.city : props.data.company + " " + props.data.city}</div>
                                <hr />
                                <Link to="/complete-orders">My Orders</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile-detailed-view">
                    <div className="profile-row">
                        <div className="profile-detailed-view-header">
                            <h2>My account</h2>
                        </div>
                    </div>
                    <div className="profile-detailed-view-body">
                        <h6 className="profile-detailed-view-body-title">
                            User information
                        </h6>
                        <div className="profile-row">
                            <div className="profile-detailed-view-body-field">
                                <label>Name</label>
                                <p>{props.data.name}</p>
                            </div>
                            <div className="profile-detailed-view-body-field">
                                <label>Email address</label>
                                <p>{props.data.email}</p>
                            </div>
                        </div>
                        <div className="profile-row">
                            <div className="profile-detailed-view-body-field">
                                <label>Phone Number</label>
                                <p>{props.data.phone}</p>
                            </div>
                            <div className="profile-detailed-view-body-field">
                                <label>Type</label>
                                <p>{props.data.userType.toUpperCase()}</p>
                            </div>
                        </div>
                        <hr />
                        <h6 className="profile-detailed-view-body-title">
                            Contact information
                        </h6>
                        <div className="profile-row">
                            <div className="profile-detailed-view-body-field address-field">
                                <label>Address</label>
                                <p>{props.data.address}</p>
                            </div>
                        </div>
                        <div className="profile-row">
                            <div className="profile-detailed-view-body-field">
                                <label>House No</label>
                                <p>207</p>
                            </div>
                            <div className="profile-detailed-view-body-field">
                                <label>Lane</label>
                                <p>3, Trimurti chowk road</p>
                            </div>
                            <div className="profile-detailed-view-body-field">
                                <label>City</label>
                                <p>{props.data.city}</p>
                            </div>
                            <div className="profile-detailed-view-body-field">
                                <label>Postal code</label>
                                <p>411043</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default PageContent;
