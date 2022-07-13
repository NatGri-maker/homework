import {useEffect, useState} from "react";
import axios from "axios";

function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(({data})=>
        setUsers(data))
            .catch((error)=>console.error(error));
    }, []);

    return (
        <div>
            <ul>
                {
                    users.map((user) =>
                        <li key={user.id}>
                            {user.name}
                        </li>)
                }
            </ul>
        </div>
    )
}

export default UserList;