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
                <p></p>
                </Col>
            </Row>
        </div>


    )
}
export default AboutComponent;