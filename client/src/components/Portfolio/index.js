import React from "react";
import { MDBCard, MDBCardTitle, MDBBtn, MDBCardGroup, MDBCardImage, MDBCardText, MDBCardBody } from "mdbreact";
import './index.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PortfolioComponent = () => {
  return (
    <Container style={{paddingTop:"2%"}}>
    <h1 className="port-font">Portfolio</h1>
    <Row>
      <Col xs={2} md={4}>
    <MDBCardGroup className="port-size" style={{width: "75rem"}}>
      <MDBCard >
        <MDBCardImage src={require("../../assets/img/achoo-cold.jpg")} alt="Achoo App" top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle tag="h5">Achoo App</MDBCardTitle>
          <MDBCardText>
            Achoo focuses on the general public’s inability to distinguish between
            the common cold and flu, and this mishap can lead to severe consequences.
            Users are asked a series of questions to determine whether or not they have the cold or flu.
            Often times people mistake the flu for the common cold, and this is what has led to many
            deaths. Being able to recognize and differentiate between the cold and flu, will save many lives.
                    {/* <p href="https://ksuares1.github.io/Project1/"></p> */}
          </MDBCardText>
          <MDBBtn className="project" href="https://ksuares1.github.io/Project1/" color="default" size="md">
            Project 
          </MDBBtn>
          <MDBBtn className="git-btn" href="https://github.com/ksuares1/Project1" color="default" size="md">
            Github
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
      
     
      
      <MDBCard >
        <MDBCardImage src={require("../../assets/img/doctor-visit.jpg")} alt="Anticipate App" top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle tag="h5">Anticipate App</MDBCardTitle>
          <MDBCardText>
            Anticipate is a voice recording app that connects nurses and family members with patients.
            Nurses are able to sign-up and login to the patient database with back-end languages such as Node.js, Mongodb, and Mongoose. Patients' family members are able to view their family members medications through our database portal.
           <p></p>
          </MDBCardText>
          <MDBBtn className="project" href="https://github.com/ksuares1/anticipate" color="default" size="md">
            Project
          </MDBBtn>
          <MDBBtn className="git-btn" href="https://github.com/ksuares1/anticipate" color="default" size="md">
            Github
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    
      <MDBCard>
        <MDBCardImage src={require("../../assets/img/music-pic.jpg")} alt="Music Quote" top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle tag="h5">Liri Node App</MDBCardTitle>
          <MDBCardText>
            LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.
            This application searches Spotify for songs, Bands in Town for concerts, and OMDB for movies.
          </MDBCardText>
          <MDBBtn className="git-btn" href="https://github.com/ksuares1/liri-node-app" color="default" size="md">
            Github
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCardGroup>
     </Col>
     </Row>
    </Container>
  );
}


export default PortfolioComponent;