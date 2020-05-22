import React from "react";
import { MDBCard, MDBCardTitle, MDBBtn, MDBCardGroup, MDBCardImage, MDBCardText, MDBCardBody } from "mdbreact";
// import Col from "react-bootstrap/Col";

// Remove materialize
//  adjust size of cards 

const PortfolioComponent = () => {
  return (
    <main>
    <h1>Portfolio</h1>
    <br>
    </br>
    <MDBCardGroup>
     
      <MDBCard>
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
          <MDBBtn href="https://ksuares1.github.io/Project1/" color="primary" size="md">
            Cover Your Sneeze
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
     
      
      <MDBCard>
        <MDBCardImage src={require("../../assets/img/doctor-visit.jpg")} alt="Anticipate App" top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle tag="h5">Anticipate App</MDBCardTitle>
          <MDBCardText>
            Anticipate is a voice recording app that connects nurses and family members with patients.
            Nurses are able to sign-up and login to the patient database with back-end languages such as Node.js, Mongodb, and Mongoose. Patients' family members are able to view their family members medications through our database portal.
           <p></p>
          </MDBCardText>
          <MDBBtn href="https://github.com/ksuares1/anticipate" color="primary" size="md">
            Learn More
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
          <MDBBtn href="https://github.com/ksuares1/liri-node-app" color="primary" size="md">
            Learn More
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCardGroup>
    </main>
  );
}


export default PortfolioComponent;