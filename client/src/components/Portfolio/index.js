import React from "react"; 
import { MDBCard, MDBCardTitle, MDBBtn, MDBCardGroup, MDBCardImage, MDBCardText, MDBCardBody } from "mdbreact";



const PortfolioComponent = () => {
  return (

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
          </MDBCardText>
          <MDBBtn color="primary" size="md">
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
            
          </MDBCardText>
          <MDBBtn color="primary" size="md">
            read more
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>

      <MDBCard>
        <MDBCardImage src="https://mdbootstrap.com/img/Photos/Others/images/77.jpg" alt="MDBCard image cap" top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up
            the bulk of the card's content.
          </MDBCardText>
          <MDBBtn color="primary" size="md">
            read more
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCardGroup>
  );
}


export default PortfolioComponent;