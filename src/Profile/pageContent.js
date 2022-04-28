import React from "react";

class PageContent extends React.Component {
  render() {
    return (

<div class="container-fluid mt--7">
        <div class="row">
          <div class="col-xl-4 order-xl-2 mb-5 mb-xl-0">
            <div class="card card-profile shadow">
              <div class="row justify-content-center">
                <div class="col-lg-3 order-lg-2">
                  <div class="card-profile-image">
                    <a href="#">
                      <img
                        src="https://i.pinimg.com/originals/ef/0e/a4/ef0ea49004626663c05332b66966179c.png"
                        class="rounded-circle"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"
              >
                <div class="d-flex justify-content-between">
                  <a href="#" class="btn btn-sm btn-info mr-4">Place Order</a>
                  <a href="#" class="btn btn-sm btn-default float-right"
                    >Status</a
                  >
                </div>
              </div>
              <div class="card-body pt-0 pt-md-4">
                <div class="row">
                  <div class="col">
                    <div
                      class="card-profile-stats d-flex justify-content-center mt-md-5"
                    >
                      <div>
                        <span class="heading">20</span>
                        <span class="description">Orders</span>
                      </div>
                      <div>
                        <span class="heading">2</span>
                        <span class="description">Pending</span>
                      </div>
                      <div>
                        <span class="heading">18</span>
                        <span class="description">Completed</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-center">
                  <h3>
                    Abhijeet Ingle<span class="font-weight-light">, 19</span>
                  </h3>
                  <div class="h5 font-weight-300">
                    <i class="ni location_pin mr-2"></i>Pune, Maharashtra
                  </div>
                  <div class="h5 mt-4">
                    <i class="ni business_briefcase-24 mr-2"></i>Individual
                  </div>
                  <div>
                    <i class="ni education_hat mr-2">Pune Institute of Computer Technology</i>
                  </div>
                  <hr class="my-4" />
                  
                  <a href="#">My Orders</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-8 order-xl-1">
            <div class="card bg-secondary shadow">
              <div class="card-header bg-white border-0">
                <div class="row align-items-center">
                  <div class="col-8">
                    <h3 class="mb-0">My account</h3>
                  </div>
                  <div class="col-4 text-right">
                    <a href="#!" class="btn btn-sm btn-primary">Settings</a>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div>
                  <h6 class="heading-small text-muted mb-4">
                    User information
                  </h6>
                  <div class="pl-lg-4">
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="form-group focused">
                          <label class="form-control-label" for="input-username"
                            >Name</label
                          >
                          <p>
                              Abhijeet Ingle
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label class="form-control-label" for="input-email"
                            >Email address</label
                          >
                          <p>abhijeet171202@gmail.com</p>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="form-group focused">
                          <label
                            class="form-control-label"
                            for="input-first-name"
                            >Phone Number</label
                          >
                          <p>9876543210</p>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group focused">
                          <label
                            class="form-control-label"
                            for="input-last-name"
                            >Type</label
                          >
                          <p>Individual</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr class="my-4" />
                  {/* <!-- Address --> */}
                  <h6 class="heading-small text-muted mb-4">
                    Contact information
                  </h6>
                  <div class="pl-lg-4">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group focused">
                          <label class="form-control-label" for="input-address"
                            >Address</label
                          >
                          <p>Room no 207, PICT Hostel,PICT, 3 Trimurti Chowk Road,  Dhankawadi, Pune 411043</p>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-4">
                        <div class="form-group focused">
                          <label class="form-control-label" for="input-city"
                            >House No</label
                          >
                          <p>207</p>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="form-group focused">
                          <label class="form-control-label" for="input-country"
                            >Lane</label
                          >
                          <p>3, Trimurti chowk road</p>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="form-group">
                          <label class="form-control-label" for="input-country"
                            >City</label
                          >
                          <p>Pune</p>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="form-group">
                          <label class="form-control-label" for="input-country"
                            >Postal code</label
                          >
                          <p>411043</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr class="my-4" />
                  {/* <!-- Description --> */}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
    }
}
export default PageContent