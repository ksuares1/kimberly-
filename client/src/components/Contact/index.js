import React from "react";
import './index.css';
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import Navbar from './components/Nav';


class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    axios({
      method:"Post", 
      url:"http://localhost:3002/send",
      data: this.state
    }).then( (response)=>{
      if(response.data.status === 'success'){
        alert("Message Sent.");
        this.resetForm()
      }else if(response.data.status === 'fail'){
        alert("Message failed to send.")
      }
    })

  }
  render() {
    return (
      // add col and row to the outer box of the div
      <Form className="contact" onSubmit={this.handleSubmit.bind(this)} method="POST">
        <br>
        </br>
        <h1>Contact Me</h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control className="contact-name" type="name" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="kimberlyjsuares@gmail.com" />
        </Form.Group>

        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">
            Message
            </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
          />
        </div>
        <Button className="button" variant="secondary" type="submit">
          Submit
  </Button>
      </Form>

    )
  }
}
export default ContactForm;