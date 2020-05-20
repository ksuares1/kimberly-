import React from "react";
import './index.css';
import main from '../../assets/img/kick.jpg';
// import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

const HomeComponent = () => {
    return (

        <div className="container" style={{ backgroundImage: `url(${main})` }}>
           
           <br>
           </br>
           <br>
           </br>
           <br>
           </br>
           <br>
           </br>
            <h1 className="home-text">Hi! I'm Kimberly Suares a Full Stack Web Developer.</h1>
            <p>
                
        </p>
            <p>
                <Button className="home-btn" href="/about" variant="default">Find out more</Button>
            </p>
            </div>
        // </Jumbotron> 





    );
}

export default HomeComponent;