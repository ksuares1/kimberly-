import React from "react";
import './index.css';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";



function AboutComponent() {
    return (
        <div>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <Row>
                <Col xs={6} md={4}>
                    <img className="about-img" src={require("../../assets/img/profile.JPG")} alt="Kimberly Suares" />
                    <div>
                        <p className="about-text" style={{ display: "inline-block", width: '50%', height: '50%' }}>
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
        </div>


    )
}
export default AboutComponent;