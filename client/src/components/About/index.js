import React from "react";
import './index.css';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";


const AboutComponent=()=> {

    return (
        <Container className="about-wrapper" style={{paddingTop:"2%"}}>
            
            <Row>
                 <Col xs={12} md={4}> 
                    <img className="about-img" src={require("../../assets/img/profile.JPG")} alt="Kimberly Suares" />
                    </Col>
                    <Col xs={12} md={1}>
                        </Col>
                    <Col md={7}>
                        
                    <div className="text-wrapper">
                        <p className="about-text">
                            Hi, I'm Kimberly Suares!
                            I'm a Full Stack Web Developer specializing in health focused applications.

                           <p> My coding journey started almost six years ago, after I took an online business course.
                            I quickly fell in love with creating something from scratch, after completing a Wordpress website as my first homework assignment.</p>
                            <p> During my years of learning to code, I volunteered at a local hospital called New York Presbyterian Brooklyn Methodist, where I visited patients; asked them questions,
                            and provided them with information about their care once they left the hospital. This hospital used very little technology to interact with its patients, and that's when I realized how technology could effectively change patients lives!</p>

                            Today, I build applications to help users create healthier lifestyles, establish a deeper understanding of their medical health, and connection with their doctor's.
                As a graduate of Columbia University's Coding Engineering Bootcamp, I have developed invaluable skills and knowledge in a variety of coding languages such as: HTML5, CSS, JavaScript, JQuery, Bootstrap, Mongodb, Express, Node.js, Sequelize, AJAX/Axios, and more. </p>
                    </div>
                 </Col> 
            </Row>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>

            <div>
                <h1 className="skills text-align:center">Skills</h1>

                <div className="skills-conatainer">
                    <div className="featured-on-alerts">

                        <img src={require("../../assets/img/html-icon.png")} alt="HTML5-icon" width="85" height="85" />
                        <img src={require("../../assets/img/css-icon.png")} alt="Css-icon" width="100" height="100" />
                        <img src={require("../../assets/img/node-icon.png")} alt="Node-icon" width="100" height="100" />
                        <img src={require("../../assets/img/expressjs-icon.jpg")} alt="express-icon" width="120" height="120" />
                        <img src={require("../../assets/img/javascript-icon.png")} alt="JavaScript-logo" width="75" height="75" />
                        <img src={require("../../assets/img/jquery-icon.png")} alt="Jquery-icon" width="75" height="75" />
                        <img src={require("../../assets/img/firebase-icon.png")} alt="firebase-icon" width="75" height="75" />
                        <img src={require("../../assets/img/mysql-icon.png")} alt="Mysql-icon" width="75" height="75" />
                        <img src={require("../../assets/img/mongodb-icon.png")} alt="Jquery-icon" width="85" height="85" />
                        <img src={require("../../assets/img/bootstrap-icon.png")} alt="Bootstrap-icon" width="75" height="75" />
                        <img src={require("../../assets/img/react.png")} alt="React-icon" width="75" height="75" />
                        <img src={require("../../assets/img/ajax.jpg")} alt="Ajax-icon" width="75" height="75" />
                    </div>
                </div>
            </div>
        </Container>





    )
}
export default AboutComponent;