import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faAndroid, faFirefox } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div id="services" className="services">
      <h1 className="py-5">my services</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>
              <h3>Web Development</h3>
              <p>I am proficient in working in both backend and frontend of a web application.</p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>
              <h3>Cloud Computing</h3>
              <p>Services like AWS.</p>
            </div>
          </div>
          
      </div>
      </div>
    </div>

  )
}

export default Services;
