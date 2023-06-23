import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SignInSide from "./main";

import EditTicket from "./components/edit-ticket.component";
import CreateTicket from "./components/create-ticket.component";
import TicketList from "./components/ticket-list.component";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/"} className="nav-link">
                  REACT MERN STACK CRUD
                </Link>
              </Navbar.Brand>
              <Nav className="justify-content-end">
                <Nav>
                  <Link to = {"/create-ticket"} className="nav-link">
                    Create Ticket
                  </Link>
                </Nav>
                <Nav>
                  <Link to = {"/ticket-list"} className="nav-link">
                    Ticket List
                  </Link>
                </Nav>


              </Nav>
            </Container>
          </Navbar>

        <Container>
          <Row>
            <Col md ="12">
              <div className="wrapper">
                <Switch>
              <Route exact path="/" component={SignInSide} />
              <Route path="/create-ticket" component={CreateTicket} />
              <Route path="/edit-ticket/:id" component={EditTicket} />
              <Route path="/ticket-list" component={TicketList} />
              </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
