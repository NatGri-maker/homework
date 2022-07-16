import {Button, Col, Form, Row} from "react-bootstrap";
import {useState} from "react";

export default function SearchForm({onSearch}) {
    const initialValues = {
        name: '',
        email: '',
        username: '',
        city: '',
    }
    const [values, setValues] = useState(initialValues);

    const search = async (event) => {
        event.preventDefault();
        let params = {};
        for (let key in values) {
            if (values[key]) {
                params[key] = values[key]
            }
        }
        if (typeof onSearch === 'function') {
            await onSearch(params);
        }
    }

    const reset = () => setValues(initialValues);

    const handleChange = (event) => {
        setValues({...values, [event.target.name]: event.target.value})
    }

    return (
        <Form onSubmit={search} onReset={reset}>
            <Row>
                <Col lg={3}>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            placeholder="Enter Name"
                            value={values.name}
                            name='name'
                            onChange={handleChange}
                        />

                    </Form.Group>
                </Col>
                <Col lg={3}>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email"
                                      placeholder="Enter email"
                                      value={values.email}
                                      name='email'
                                      onChange={handleChange}
                        />

                    </Form.Group>
                </Col>
                <Col lg={3}>
                    <Form.Group className="mb-3">
                        <Form.Label>UserName</Form.Label>
                        <Form.Control
                            placeholder="Enter UserName"
                            value={values.username}
                            name='username'
                            onChange={handleChange}
                        />

                    </Form.Group>
                </Col>
                <Col lg={3}>
                    <Form.Group className="mb-3">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            placeholder="Enter City"
                            value={values.city}
                            name='city'
                            onChange={handleChange}
                        />

                    </Form.Group>
                </Col>
            </Row>

            <div className={"d-flex bg-light p-1 rounded justify-content-end"}>
                <Button variant="secondary" type="reset" className={"me-2"}>Reset</Button>
                <Button variant="primary" type="submit">Search</Button>

            </div>
        </Form>
    )
}