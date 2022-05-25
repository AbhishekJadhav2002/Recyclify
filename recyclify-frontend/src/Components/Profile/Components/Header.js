import React from "react"

function Header(props) {
    // const editProfile = {

    // }

    return (
        <div className="profile-header-container">
            <span className="header"></span>
            <div className="header-title">
                <h1>Hello {(props.data.name).split(" ")[0]}!</h1>
                <blockquote>
                    <p>The environment is where we all meet; where we all have a mutual interest; it is the one thing all of us share.</p>
                    <cite> - Lady Bird Johnson</cite>
                </blockquote>
                {/* <button className="btn">Edit Profile</button> */}
            </div>
        </div>
    )
}

export default Header;
