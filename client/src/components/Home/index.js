import React from "react";
import './index.css';
import main from '../../assets/img/port-main.jpg';
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

const HomeComponent = () => {
    return (

        <Jumbotron className="container" style={{ backgroundImage: `url(${main})` }}>
            <h1>Hi! I'm Kimberly Suares a Full Stack Web Developer.</h1>
            <p>
                
        </p>
            <p>
                <Button href="/about" variant="primary">Find out more</Button>
            </p>
        </Jumbotron>





    );
}

export default HomeComponent;