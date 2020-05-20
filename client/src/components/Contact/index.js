import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


function ContactForm() {
  return (
    <Form>
      <br>
      </br>
      <h1>Contact Me</h1>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter Name" />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
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
      <Button variant="primary" type="submit">
        Submit
  </Button>
    </Form>

  )
}
export default ContactForm;