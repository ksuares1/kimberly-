import React from "react";
import './index.css';
// import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import Navbar from './components/Nav';


const ContactForm =()=>{
    return (
      // add col and row to the outer box of the div
      <Form className="contact" >
        <br>
        </br>
        <h1 className="contact-header">Contact Me</h1>
        <p className="form-connect">Connect with me at kimberlyjsuares@gmail.com</p>
        <br>
        </br>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control className="contact-name"   type="name" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email"  placeholder="kimberlyjsuares@gmail.com" />
        </Form.Group>

        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">
            Message
            </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
            // value={this.state.message}
            // onChange={this.onMessageChange.bind(this)}
          />
        </div>
        <Button className="button" variant="secondary" type="submit">
          Submit
  </Button>
      </Form>

    )
  }

export default ContactForm;