import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Xend Finance
              <br></br>
              Intern
              <br></br>
              2019-2020
            </h3>
  
            <p>
              I was involved in various projects which helped me to improve both my front end skills and backend skills
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
          <h3>Tfare
              <br></br>
              Backend Developer
              <br></br>
              2020-2021
            </h3>
            <p>Worked in a team as a backend developer, to help build a logistics application, that made booking of trips and taxi rides easier for users.
            </p>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default Experience;
