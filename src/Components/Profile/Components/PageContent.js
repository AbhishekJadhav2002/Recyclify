import React from "react"

function PageContent() {
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
                                        <span className="numbers">20</span>
                                        <span className="desc">Orders</span>
                                    </div>
                                    <div>
                                        <span className="numbers">2</span>
                                        <span className="desc">Pending</span>
                                    </div>
                                    <div>
                                        <span className="numbers">18</span>
                                        <span className="desc">Completed</span>
                                    </div>
                                </div>
                            </div>
                            <div className="profile-card-body-fields">
                                <h3>
                                    Abhijeet Ingle<span>, 19</span>
                                </h3>
                                <h5>Pune, Maharashtra</h5>
                                <h5 className="userType">Individual</h5>
                                <div>Pune Institute of Computer Technology</div>
                                <hr />
                                <a href="#">My Orders</a>
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
                                <p>Abhijeet Ingle</p>
                            </div>
                            <div className="profile-detailed-view-body-field">
                                <label>Email address</label>
                                <p>abhijeet171202@gmail.com</p>
                            </div>
                        </div>
                        <div className="profile-row">
                            <div className="profile-detailed-view-body-field">
                                <label>Phone Number</label>
                                <p>9876543210</p>
                            </div>
                            <div className="profile-detailed-view-body-field">
                                <label>Type</label>
                                <p>Individual</p>
                            </div>
                        </div>
                        <hr />
                        <h6 className="profile-detailed-view-body-title">
                            Contact information
                        </h6>
                        <div className="profile-row">
                            <div className="profile-detailed-view-body-field address-field">
                                <label>Address</label>
                                <p>Room no 207, PICT Hostel,PICT, 3 Trimurti Chowk Road,  Dhankawadi, Pune 411043</p>
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
                                <p>Pune</p>
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
