import React from "react";
import UTA from '../images/uta.png'
import MumbaiUniversity from '../images/mumbaiUniversity.png'

const Education = () => {
  return (
    <div id="education" className="container py-5">
    <h1 className="py-5" style = {{color:'black',textAlign:'center'}}>EDUCATION</h1>  
    <div className="row">
     
    <div className="col-3">
       
        </div>
        <div className="col-3">
        <img className="g-card-image" src={UTA} alt = 'University of Texas At Arlington' />
        <p><br></br></p>
        <div>
            <h3 style={{color:'firebrick'}}>⦿ MSCSE</h3>
            <h3 style={{color:'firebrick'}}>⦿ University of Texas</h3>
            <h3 style={{color:'firebrick'}}>⦿ 2019-2021</h3>
        </div>
        </div>
        <div className="col-3">
        <img className="g-card-image" src={MumbaiUniversity} alt = 'Mumbai University' />
        <p><br></br></p>
       <div>
            <h3 style={{color:'firebrick'}}>⦿ BE</h3>
            <h3 style={{color:'firebrick'}}>⦿ Mumbai University</h3>
            <h3 style={{color:'firebrick'}}>⦿ 2014-2018</h3>
        </div>
    </div>

    </div>
    </div>

  )
}

export default Education;
