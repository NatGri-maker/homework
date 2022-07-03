import {Button, Col, Container, Form, FormControl, InputGroup, ListGroup, Table} from "react-bootstrap";
import {Plus} from "react-bootstrap-icons";
import {useEffect, useState} from "react";
import axios from "axios";

function Todo() {
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState('')


    const addTask = async (event) => {
        event.preventDefault();
        await axios.post('http://localhost:3030/todos/', {
                "text": newTask,
                "done": false
            }
        );
   setNewTask('') }


    useEffect(() => {
        axios.get('http://localhost:3030/todos').then((response) => setTasks(response.data))
    }, [])


    return (


        <Container className="mt-3">
            <Form onSubmit={addTask}>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="add new task" onChange={(event) => setNewTask(event.target.value)} value={newTask}
                    />
                    <Button varriant="Outline-secondary" type="submit">
                        <Plus/>
                    </Button>
                </InputGroup>
            </Form>
            <ListGroup>
                {
                    tasks.map((task) => (
                        <ListGroup.Item key={task.id}>
                            <div>
                                {task.text}
                            </div>
                        </ListGroup.Item>
                    ))
                }
            </ListGroup>

        </Container>
    )

}

export default Todo;