import {useEffect, useState} from "react";
import axios from "axios";
import {Button, Card, Col, Modal, Row} from "react-bootstrap";

function UserList() {
    const [users, setUsers] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(({data}) =>
                setUsers(data))
            .catch((error) => console.error(error));
    }, []);

    const handleClose=()=>{
        setShow(false);
    }
    return (
        <div className={"p-3"}>
            <Row>
                {
                    users.map((user) =>(
                        <Col sm={6} md={4} lg={3} key={user.id} className={"mb-3"}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>{user.name}</Card.Title>
                                    <Card.Subtitle>{user.email}</Card.Subtitle>
                                   <Card.Text>{user.address.city},{user.address.street}</Card.Text>
                                   <Card.Text>{user.company.name}</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button onClick={}>Open</Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default UserList;