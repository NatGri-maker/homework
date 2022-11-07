import {Button, Form, Row} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from "react";

function PostsForm() {
    const [values, setValues] = useState({});
    const changeHandler=()=>{}



    return (
        <Form>


            <Form.Group className="mb-3">
                <Form.Label>ID</Form.Label>
                <Form.Control type="id" placeholder="enter id"/>
            </Form.Group>


            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type="title" placeholder="enter title"/>
            </Form.Group>


            <Form.Group className="mb-3">
                <Form.Label>Body</Form.Label>
                <Form.Control type="body" placeholder="enter body"/>
            </Form.Group>


            <div className="d-flex bg-light p-1 rounded justify-content-end">
                <Button variant="secondary" type="reset" className="me-3">Reset</Button>
                <Button variant="primary" type="submit">Post</Button>
            </div>
        </Form>

    )
}

export default PostsForm;
