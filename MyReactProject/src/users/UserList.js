import {useEffect, useState} from "react";
import axios from "axios";
import {Button, Card, Col, Modal, Row} from "react-bootstrap";

function UserCard({data, onOpen}) {
    const {name, email, company, address} = data;

    const handleClick = () => {
        onOpen && onOpen(data);
    };
    return (
        <Card>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle>{email}</Card.Subtitle>
                <Card.Text>{address.city},{address.street}</Card.Text>
                <Card.Text>{company.name}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button onClick={handleClick}>Open</Button>
            </Card.Footer>
        </Card>
    );
}

function UserList() {
    const [users, setUsers] = useState([]);
    const [show, setShow] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [userPosts, setUserPosts] = useState([]);


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(({data}) =>
                setUsers(data))
            .catch((error) => console.error(error));
    }, []);

    const handleClose = () => {
        setShow(false);
    };

    const handleUserOpen = async (userData) => {
        setShow(true);
        setCurrentUser(userData);
        const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
            params: {
                userId: userData.id
            }

        });
        setUserPosts(data);
    };
    return (
        <div className={"p-3 bg-secondary"}>
            <Row>
                {
                    users.map((user) => (
                        <Col sm={6} md={4} lg={3} key={user.id} className={"mb-3"}>
                            <UserCard data={user} onOpen={handleUserOpen}/>
                        </Col>
                    ))
                }
            </Row>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{currentUser.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{currentUser.email}
                    {
                        userPosts.map((post) => (

                            <Card key={post.id}>
                                <Card.Body>
                                    <Card.Title>{post.title}</Card.Title>
                                    <Card.Text>{post.body}</Card.Text>
                                </Card.Body>
                            </Card>
                        ))
                    }

                </Modal.Body>
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