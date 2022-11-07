import {useEffect, useState} from "react";
import axios from "axios";
import UserContext from "./UsersContext"
import UsersList from "./UsersList";
import LogInPage from "./LogInPage";
import Header from "./Header";
import {Container} from "react-bootstrap";

function App() {

    const [user, setUser] = useState(null);
    const [users, setUsers] = useState([]);

    useEffect(() => {
            const token = localStorage.getItem('token');
            if (token) {

                axios.get('http://localhost:3040/users/current', {
                    headers: {
                        "Authorization": token
                    }
                })
                    .then((response) => setUser(response.data))


            }

        },
        []);

    useEffect(()=>{

        if(user!==null){
            const token = localStorage.getItem('token');
            if (token) {
                axios.get('http://localhost:3040/users', {
                    headers: {
                        "Authorization": token
                    }
                })
                    .then((response) => {
                        const data = response.data.filter((person) => person.username !== user.username)
                        setUsers(data);
                    })
            } }
    },[user]);

    return (

        <UserContext.Provider value={{user, setUser}}>
            {
                user ? (
                        <Container>
                            <Header/>
                            <UsersList users={users}/>
                        </Container>
                    ) :
                    (
                        <LogInPage/>
                    )
            }

        </UserContext.Provider>

    );
}

export default App;