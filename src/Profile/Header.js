import React from "react";
class Header extends React.Component {
  render() {

    const myStyle = {minHeight: '600px',
          backgroundImage: 'url(https://utahhome.me/wp-content/uploads/2017/04/GettyImages-537905028-e1492556663418.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
    };

  return (
    <div
      class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
      style={myStyle}    
    >
      {/* <!-- Mask --> */}
      <span class="mask bg-gradient-default opacity-8"></span>
      {/* <!-- Header container --> */}
      <div class="container-fluid d-flex align-items-center">
        <div class="row">
          <div class="col-lg-7 col-md-10">
            <h1 class="display-2 text-white">Hello Abhijeet!</h1>
            <p class="text-white mt-0 mb-5">
           <i> The environment is where we all meet; where we all have a mutual interest; it is the one thing all of us share.</i> <b>-Lady Bird Johnson</b>
            </p>
            <a href="#!" class="btn btn-info">
              Edit profile
            </a>
          </div>
        </div>
      </div>
    </div>

  );
}
}


export default Header;
