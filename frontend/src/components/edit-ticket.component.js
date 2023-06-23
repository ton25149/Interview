import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import axios from 'axios';

export default class EditTicket extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      contact: ''
    }
  }
  componentDidMount() {
    axios
      .get(
        'https://localhost:5000/tickets/edit-ticket/' +
          this.props.match.params.id
      )
      .then(res => {
        this.setState({
          title: res.data.title,
          description: res.data.description,
          contact: res.data.contact
        });
      })
      .catch((error) => {
        console.error(error);
      });
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

    axios
      .put("http://localhost:5000/tickets/update-ticket/" + this.props.match.params.id, titleObject)
      .then(res => {
        console.log(res.data);
        console.log('Ticket Updated Success');

      }).catch((error) => {
        console.log(error);

      })

    //Redirect to Ticket List
    this.props.history.push('/ticket-list');




  };
  render() {
    return (
      <div className="form-wrapper mt-5">
        <h1>Update Ticket</h1>
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="Title">
            <Form.Label>Name</Form.Label>
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
            Update Ticket
          </Button>
        </Form>
      </div>
    );
  }
}
