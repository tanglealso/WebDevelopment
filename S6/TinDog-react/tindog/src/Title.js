import React from "react";
import iPhoneImg from './images/iphone6.png' 

const Title = () => {
  return (
    <section id="title">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <a className="navbar-brand" href="">
            tindog
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar-toggle-items"
            aria-controls="navbar-toggle-items"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbar-toggle-items">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#footer">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pricing">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#cta">
                  Download
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="row">
          <div className="col-lg-6">
            <h1>Meet new and interesting dogs nearby.</h1>
            <button
              type="button"
              className="btn btn-dark btn-lg download-button"
            >
              <i className="fab fa-apple"></i> iOS Download
            </button>
            <button
              type="button"
              className="btn btn-outline-light btn-lg download-button"
            >
              <i className="fab fa-google-play"></i>Download
            </button>
          </div>
          <div className="col-lg-6">
            <img
              src={iPhoneImg}
              className="title-image"
              alt="iphone-mockup"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Title;
