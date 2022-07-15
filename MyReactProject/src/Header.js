import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function Header(){
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="#home">Manu</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/timer/1">Timer 1</Nav.Link>
                    <Nav.Link as={Link} to="/timer2">Timer 2</Nav.Link>
                    <Nav.Link as={Link} to="/users">Users</Nav.Link>
                    <Nav.Link as={Link} to="/users2">Users Table</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}