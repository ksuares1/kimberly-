import React from "react";
// import './index.css';
// import main from '../../assets/img/port-main.jpg';
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

const HomeComponent = () => {
    return (
        <Jumbotron>
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
            // <div style={{backgroundImage:`url(${main})`}}/>
    


    );
}

export default HomeComponent;