import React, { Component } from 'react'
import axios from 'axios';
import  Table  from 'react-bootstrap/Table'
import TicketTableRow from './TicketTableRow'

export default class TicketList extends Component {

constructor (props) {
  super(props);
  this.state = {
    tickets: []
  }
}
componentDidMount () {
  axios.get('http://localhost:5000/tickets')
  .then(res => {
    this.setState({
      tickets: res.data
    })
  })
  .catch((error) => {
      console.log(error)
})
}

DataTable = () => {
 return this.state.tickets.map((res, i) =>{
   return <TicketTableRow obj={res} key = {i} />
  })

}

  render() {
    return (
      <div className='table-wrapper mt-5'>
        <h1>Ticket List</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Contact</th>
              <th>Date</th>
              </tr>
          </thead>
          <tbody>
            {this.DataTable()}
          </tbody>
        </Table>
        
        </div>
    )
  }
}
