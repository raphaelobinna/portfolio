import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profilePic from '../images/profile.jpeg';

const AboutMe = () => {
  return (
    <div id="about">
    
                <br></br>
                
                <div className="row">
               <div className="col-lg-4 col-xm-6">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={profilePic} alt='{props.item.imgSrc}' />
                    </div>
                </div>      
               
                
                    <div className="col-lg-7 col-xm-12">
                        <div>
                       <h2 style ={{color:'midnightblue'}}>
                                ABOUT ME
                            </h2>
                        </div>
                        <hr style={{background:'white'}}></hr>
                        <div class = "polaroid">
                        <h5 style={{color:'ButtonText',textAlign:'justify'}}>
                            I am Ogbonnaya Obinna, currently residing in Enugu state. I am a great communicator albeit focused and to the point. 
                            I love interacting with people, asking questions and constantly enhancing my knowledge. At the same time, I love sharing my ideas and experiences with others. 
                            In this industry, it is extremely important to have an open communication, to analyze issues and present speedy solutions. <br/>
                            Given my nature, I am interested in expanding my career graph as a Software developer where I also look forward to attaining people management opportunity in my area of work.
                            I am an analytical and skilled professional who has developed an excellent reputation in leading and completing numerous fully tested web and app development projects in selenium within the defined time and budget.<br/>
                            I am capable of using the latest tools and techniques to design and fully test websites that met and exceeded client satisfaction. 
                            I have demonstrated expertise in identifying, analyzing, and resolving complex issues by delivering robust technical solutions.
                            I am proficient in developing websites using <strong> Javacript, Advance HTML, CSS, Typescript, Nodejs, MongoDB, MySQL, PostgreSQL, Graphql.</strong><br/>
                            I have worked with frameworks like<strong> Nestjs, Tailwind, Adonisjs and Prisma as an ORM. </strong><br/>
                            I have extensive knowledge of software, website, and application development protocols, procedures, and practices.
                           
                        </h5>
                        </div>
                    </div>
                  
                </div>
        </div>
    );
  
}

export default AboutMe
