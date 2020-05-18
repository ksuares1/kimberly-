import React from "react";
// import './index.css';
import main from '../../assets/img/port-main.jpg';
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

const HomeComponent = () => {
    return (
       
        <Jumbotron  style={{backgroundImage:`url(${main})`}}>
        <h1>Hi! I'm Kimberly Suares a Full Stack Web Developer.</h1>
        <p>
          .
        </p>
        <p>
          <Button variant="primary">Find out more</Button>
        </p>
      </Jumbotron>
      
            
    


    );
}

export default HomeComponent;