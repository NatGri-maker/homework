import {Container, Form, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Outlet} from "react-router";
import {useContext} from "react";
import UserContext from "./UserContext";
import ThemeContext from "./ThemeContext";
import {Link} from "react-router-dom";

export default function Layout() {
    const {setUser} = useContext(UserContext)
    const{theme,setTheme}=useContext(ThemeContext)

    const changeTheme=(event)=>{
       event.target.checked ? setTheme("dark"): setTheme("light");
    }

    const LogOut = () => {
        localStorage.removeItem('token')
        /*window.location.reload();*/
        setUser(null)

    }
    return (
        <div>

            <Navbar bg={theme} variant={theme}>
                <Container>
                    <Navbar.Brand href="#home">My Project</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"/Gallery"}>Gallery</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing" className={"flex-fill"}>Pricing</Nav.Link>

                    </Nav>
                    <Form className={"align-content-between"}>
                        <Form.Check
                            type="switch"
                            label="Theme"
                            onClick={changeTheme}

                        />
                    </Form>
                    <NavDropdown title="User">
                        <NavDropdown.Item onClick={LogOut}>Log Out</NavDropdown.Item>
                    </NavDropdown>
                </Container>
            </Navbar>
            <Outlet/>
        </div>
    )
}
