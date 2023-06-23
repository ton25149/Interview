import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import  Button  from 'react-bootstrap/Button'
import axios from 'axios'

export default class TicketTableRow extends Component {
 
  deleteTicket =() => {
    axios.delete('http://localhost:5000/tickets/delete-ticket/' + this.props.obj._id).then((res) => {
      console.log('Ticket deleted')
    }).catch((error) => {
      console.log(error);
    })
  
  }



  render() {
    return (
      <tr>
        <td>{this.props.obj.title}</td>
        <td>{this.props.obj.description}</td>
        <td>{this.props.obj.contact}</td>
        <td>{this.props.obj.date}</td>
        <td>
            <Link className='edit-link btn btn-primary' size='sm' to = {"/edit-ticket/" + this.props.obj._id}>
                Edit
            </Link>
            <Button onClick={this.deleteTicket} variant='danger' >Delete</Button>
        </td>
      </tr>
    )
  }
}
