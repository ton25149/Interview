import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import axios from "axios"

export default class CreateTicket extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      contact: "",
    };
  }
  onChangeTitle = (event) => {
    this.setState({ title: event.target.value });
  };
  onChangeDescription = (event) => {
    this.setState({ description: event.target.value });
  };
  onChangeContact = (event) => {
    this.setState({ contact: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const titleObject = {
      title: this.state.title,
      description: this.state.description,
      contact: this.state.contact
    };

    axios.post('http://localhost:5000/tickets/create-ticket', titleObject).then(res => console.log(res.data));


    this.setState({
      title: "",
      description: "",
      contact: "",
    });
  };

  render() {
    return (
      <div className="form-wrapper mt-5 text-right">
        <h1>Create Ticket</h1>
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="Title" className="text-right">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={this.state.title}
              onChange={this.onChangeTitle}

            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="Description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              value={this.state.description}
              onChange={this.onChangeDescription}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="Contact">
            <Form.Label>Contact</Form.Label>
            <Form.Control
              type="text"
              value={this.state.contact}
              onChange={this.onChangeContact}
            ></Form.Control>
          </Form.Group>

          <Button variant="success" size="lg" block="block" type="submit">
            Create Ticket
          </Button>
        </Form>
      </div>
    );
  }
}
