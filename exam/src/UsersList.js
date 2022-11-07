import {Container, ListGroup} from "react-bootstrap";
import ChatModal from "./ChatModal";
import {useState} from "react";

export default function UsersList({users}) {
    const [show, setShow] = useState(false)
    const [user, setUser] = useState({})


    return (
        <Container>
            <ListGroup>

                {
                    users.map((user) => (
                        <ListGroup.Item key={user.username}
                                        onClick={() => {
                                            setShow(true)
                                            setUser(user)
                                        }
                                        }>
                            <div>{user.firstName} {user.lastName}</div>
                        </ListGroup.Item>
                    ))
                }
            </ListGroup>
            <ChatModal
                show={show}
                onHide={()=>setShow(false)}
                user={user}
            />
        </Container>
    );
}


