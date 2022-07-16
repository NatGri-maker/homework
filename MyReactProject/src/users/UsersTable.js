import {Table} from "react-bootstrap";
import {useEffect, useState} from "react";
import axios from "axios";

export default function UsersTable({data = []}) {

    return (
        <Table>
            <thead>
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>User Name</td>
                <td>Email</td>
                <td>Address</td>
                <td>Company</td>
            </tr>
            </thead>
            <tbody>
            {
                data.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.address.city},{user.address.street}</td>
                        <td>{user.company.name}</td>
                    </tr>

                ))
            }
            </tbody>
        </Table>
    );
}