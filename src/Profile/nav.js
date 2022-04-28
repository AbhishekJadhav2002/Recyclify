import React from "react";
class Home extends React.Component {
  render() {
    const myStyle = {minHeight: '600px',
    backgroundImage: 'url(https://raw.githubusercontent.com/creativetimofficial/argon-dashboard/gh-pages/assets-old/img/theme/profile-cover.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
};

    return (
      <React.Fragment>
        <div class="main-content">
        <nav class="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
        <div class="container-fluid">
          {/* <!-- Brand --> */}
          <a
            class="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
            href="#"
            target="_blank"
            >User profile</a
          >
          {/* <!-- Form --> */}
          <form
            class="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto"
          >
            <div class="form-group mb-0">
              <div class="input-group input-group-alternative">
                <div class="input-group-prepend">
                  <span class="input-group-text"
                    ><i class="fas fa-search"></i
                  ></span>
                </div>
                <input class="form-control" placeholder="Search" type="text" />
              </div>
            </div>
          </form>
          {/* <!-- User --> */}
          <ul class="navbar-nav align-items-center d-none d-md-flex">
            <li class="nav-item dropdown">
              <a
                class="nav-link pr-0"
                href="#"
              >
                <div class="media align-items-center">
                  <span class="avatar avatar-sm rounded-circle">
                    <img
                      alt="Image placeholder"
                      src="https://i.pinimg.com/originals/ef/0e/a4/ef0ea49004626663c05332b66966179c.png"
                    />
                  </span>
                  <div class="media-body ml-2 d-none d-lg-block">
                    <span class="mb-0 text-sm font-weight-bold"
                      >Abhijeet Ingle</span
                    >
                  </div>
                </div>
              </a>
              
            </li>
          </ul>
        </div>
      </nav>
            
      </div>
      </React.Fragment>
    );
  }
}
export default Home;
