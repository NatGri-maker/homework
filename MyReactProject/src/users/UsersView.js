import SearchForm from "./SearchForm";
import UsersTable from "./UsersTable";
import {Stack} from "react-bootstrap";
import {useEffect, useState} from 'react';
import axios from "axios";

export default function UsersView() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
       search().catch(console.error);
    }, []);

    const search = async (params) => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users', {params});
        setUsers(response.data);
        console.log(response.data)
    }

    return (
        <Stack gap={4} className={"m-4"}>
            <SearchForm onSearch={search}/>
            <UsersTable data={users}/>
        </Stack>
    );
}