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
            <p className="about-text" style={{ display: "inline-block", width:'50%', height:'50%'}}>
                Hi, I'm Kimberly Suares! 
                I am a Full Stack Web Developer that specializes in health focused applications.</p>
                </Col>
            </Row>
        </div>


    )
}
export default AboutComponent;