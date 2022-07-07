import {Button, Container, Form, FormControl, InputGroup, ListGroup} from "react-bootstrap";
import {AiOutlinePlus as PlusIcon} from "react-icons/ai";
import {useEffect, useState} from "react";
import axios from "axios";
import {FaRegEdit as EditIcon, FaWindowClose as DeleteIcon} from 'react-icons/fa';

export default function ToDoList() {
    const [newTask, setNewTasks] = useState('');
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        loadTasks();
    }, [])

    const handleChange = (event) => {
        setNewTasks(event.target.value)
        console.log(newTask);
    }

    const addTaskToList = async () => {
        if (newTask) {
            await axios.post('http://localhost:3030/todos/', {
                "text": newTask,
                "done": false
            });
            setNewTasks('')
        }
    }
    const loadTasks = () => {
        axios.get('http://localhost:3030/todos/').then((response) => {
            setTasks(response.data)
        })
    }
    const checkedTask = (id) => async (event) => {
        const task = tasks.find((task) => task.id === id);
        task.done = event.target.checked;
        await axios.put(`http://localhost:3030/todos/${id}`, task);
        await loadTasks();

    }
    const deleteTask = async (id) => {
        await axios.delete(`http://localhost:3030/todos/${id}`);
        await loadTasks();

    }
    const editTask = async (id) => {
        const task = tasks.find((task) => task.id === id);
        const result = window.prompt("editTask", task.text);
        if (result !== task.text) {
            task.text = result;
            await axios.put(`http://localhost:3030/todos/${id}`, task);
            await loadTasks();
        }
    }
    return (
        <Container className="mt-4">
            <Form>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="add task"
                        value={newTask}
                        onChange={handleChange}
                    />

                    <Button variant="outline-secondary" type="button" onClick={addTaskToList}><PlusIcon/></Button>
                </InputGroup>
            </Form>
            <ListGroup>
                {
                    tasks.map((task) => (
                        <ListGroup.Item key={task.id} className={"d-flex"}>
                            <Form.Check className={"me-3"}
                                        type="checkbox"
                                        checked={task.done}
                                        onChange={checkedTask(task.id)}
                            />
                            <div className={"flex-fill"}>
                                {
                                    task.done ? (<del>{task.text}</del>) : (<div>{task.text}</div>)
                                }
                            </div>
                            <Button variant="outline-secondary" type="button" className={"me-2"}
                                    onClick={() => {
                                        editTask(task.id)
                                    }}><EditIcon/></Button>
                            <Button variant="outline-secondary" type={"button"} onClick={() => {
                                deleteTask(task.id)
                            }}><DeleteIcon/></Button>
                        </ListGroup.Item>
                    ))

                }


            </ListGroup>
        </Container>
    );
}