import {Button, Container, Form} from "react-bootstrap";
import {useState} from "react";
import axios from "axios";

export default function LogInPage() {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')


    const login = async (event) => {
        event.preventDefault();
        const response = await axios.post('http://localhost:3030/login', {username, password})
            .catch((error)=>{console.error(error, 'user name or password is not correct')});
        localStorage.setItem('token', response.data.token);
        window.location.reload();


    }
    return (
        <Container className={"mt-3"}>
            <Form onSubmit={login}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>User name</Form.Label>
                    <Form.Control placeholder="Enter user name"
                                  onChange={(event) => setUserName(event.target.value)}/>

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                                   onChange={(event) => setPassword(event.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">

                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}