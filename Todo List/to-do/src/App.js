import ToDoList from "./ToDoList";
import LoadingContext from "./LoadingContext";
import {useEffect, useState} from "react";
import LogInPage from "./LogInPage";
import axios from "axios";

function App() {

    const [user, setUser] = useState(null);

    useEffect(()=>{
        const token =localStorage.getItem('token');
        if(token)
            axios.get('http://localhost:3030/user',{
                headers:{
                    "Authorization":token
                }
            }).then((response)=>setUser(response.data))

    },
        [])
    return (
        user ? <ToDoList/> : <LogInPage/>
    );
}

export default App;
