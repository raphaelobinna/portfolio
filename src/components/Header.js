import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Resume from '../assets/Resume.docx'


const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <canvas></canvas>
        <h1>SOFTWARE DEVELOPMENT</h1>
        <Typed
          className="typed-text"
          strings={["Web Design", "Web Development"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <p><br></br></p>
        <Row>
        <Col>
        
        <a offset={-110} className="btn-main-offer" href = {Resume} download>RESUME</a>
        </Col>
        <Col>
        <a href="https://github.com/raphaelobinna" target="_blank" rel="noreferrer" offset={-110} className="btn-main-offer">GITHUB</a>
        </Col>
        <Col>
        <Link smooth={true} to="contacts" offset={-110} className="btn-main-offer">contact</Link>
        </Col>
        
        </Row>
      </div>
    </div>
  )
}

export default Header;
