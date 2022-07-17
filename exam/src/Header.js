import {Button, Container, Navbar} from "react-bootstrap";
import usersContext from "./UsersContext";
import {useContext} from "react";

export default function Header(){

    const{user,setUser}=useContext(usersContext)

    const LogOut = () => {
        localStorage.removeItem('token')
        /*window.location.reload();*/
        setUser(null)

    }
    return(
        <Navbar expand="lg" variant="dark" bg="dark" className={"text-color-white"}>
            <Container>
                <Navbar.Brand href="#">{user.firstName} {user.lastName}</Navbar.Brand>
                <Button variant="primary" onClick={LogOut}>Log Out</Button>
            </Container>
        </Navbar>
    )
}