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
                I am a Full Stack Web Developer that specializes in health focused applications.
                My coding journey started almost six years ago, after I took an online business course.
                The first assignment of this course was to create a Wordpress website. I quickly fell in love with creating something from scratch.
                During my years of learning to code, I volunteered at a local hospital called New York Presbyterian Brooklyn Methodist, where I visited patients, asked them questions, 
                and provided them with information about their care once they left the hospital. </p>

                </Col>
            </Row>
        </div>


    )
}
export default AboutComponent;