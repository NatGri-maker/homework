import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import ToDoList from "./ToDoList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<ToDoList/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
