import ToDoList from "./ToDoList";
import LoadingContext from "./LoadingContext";
import {useEffect, useState} from "react";
import LogInPage from "./LogInPage";
import axios from "axios";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Layout from "./Layout";
import UserContext from "./UserContext";
import ThemeContext from "./ThemeContext";

function App() {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [theme, setTheme] = useState('light');

    useEffect(() => {
            const token = localStorage.getItem('token');
            if (token)
                axios.get('http://localhost:3030/user', {
                    headers: {
                        "Authorization": token
                    }
                }).then((response) => setUser(response.data))

        },
        [])
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <UserContext.Provider value={{user, setUser}}>
                <LoadingContext.Provider value={{loading, setLoading}}>
                    <BrowserRouter>
                        {
                            user ? (

                                <Routes>
                                    <Route path={"/"} element={<Layout/>}>
                                        <Route path={"/"} element={<ToDoList/>}></Route>
                                        { /* todo <Route path={"/Gallery"} element={<Gallery/>}></Route>*/}

                                    </Route>
                                </Routes>
                            ) : (
                                <Routes>
                                    <Route path={"*"} element={<LogInPage/>}></Route>
                                </Routes>
                            )
                        }
                    </BrowserRouter>
                </LoadingContext.Provider>
            </UserContext.Provider>
        </ThemeContext.Provider>
    );
}

export default App;
