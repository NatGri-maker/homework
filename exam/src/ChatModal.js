import {Alert, Button, Form, InputGroup, Modal, ModalBody, ModalHeader} from "react-bootstrap";
import {useEffect, useState} from "react";
import axios from "axios";

export default function ChatModal(props) {

    const [message, setMessage] = useState('')
    const [messages, getMessages] = useState([]);

    const handleChange = (event) => {
        setMessage(event.target.value)
    }

    const sendMessage = async () => {
        const token = localStorage.getItem('token');
        try {
            await axios.post(`http://localhost:3040/chat?username=${props.user.username}`, {
                "text": message
            }, {
                headers: {
                    "Authorization": token
                }
            })
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            axios.get(`http://localhost:3040/chat?username=${props.user.username}`, {
                headers: {
                    "Authorization": token
                }
            })
                .then((response) => {
                    getMessages(response.data);
                })
        }
    }, [props.user])


    return (
        <Modal {...props}>
            <Modal.Header closeButton>
                <Modal.Title>{props.user.firstName} {props.user.lastName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    {
                        messages.map((message) => (
                            message.sender === props.user.username ?
                                <Alert key={message.time} variant={"secondary"}>
                                    {message.time}
                                    {message.text}
                                </Alert>
                                :
                                <Alert key={message.time} variant={"primary"}>
                                    {message.time}
                                    {message.text}
                                </Alert>
                        ))
                    }
                </div>
                <Form onSubmit={sendMessage}>

                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="enter text"
                            onChange={handleChange}
                            required
                        />
                        <Button variant="outline-secondary" id="button-addon2" type={"submit"}>
                            Send
                        </Button>
                    </InputGroup>
                </Form>
            </Modal.Body>
        </Modal>
    )
}