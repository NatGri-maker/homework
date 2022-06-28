import {Button, Table} from 'react-bootstrap';
import{useState, useEffect}from 'react';
import axios from 'axios';

export default function PostsTable(){
    const[posts, setPost]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost/posts').then ((res)=>setPost(res.data))}, []
    )
    return (

        <Table striped bordered hover>
            <thead>
            <tr>

                <th>userId</th>
                <th>title</th>
                <th>body</th>
                <th>delete</th>
            </tr>
            </thead>
            <tbody>
            { posts.map(post=>(
                    <tr>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                        <td> <Button variant="danger" className="m-3">Delete</Button></td>
                    </tr>
                )
            )
            }
            </tbody>
        </Table>
    )


}
