import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import ToDoList from "./ToDoList";
import LoadingContext from "./LoadingContext";
import {useState} from "react";

function App() {
  const[loading, setLoading]=useState(false);
    return (
        <LoadingContext.Provider value={{loading,setLoading}}>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<ToDoList/>}></Route>
                </Routes>
            </BrowserRouter>
        </LoadingContext.Provider>
    );
}

export default App;
