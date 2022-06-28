import {Container, Nav, Navbar} from "react-bootstrap";

function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Manu</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Gallery</Nav.Link>
                    <Nav.Link href="#pricing">Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header;