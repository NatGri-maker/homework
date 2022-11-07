import UserList from "./users/UserList";
import Timer from "./timer/Timer";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route, Outlet} from "react-router";
import Layout from "./Layout";
import {Alert} from "react-bootstrap";
import UsersView from "./users/UsersView";
import FancyBorder from "./FancyBorder";
import FancyBorderView from "./fancyborder/FancyBorderView";

function App() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route path={""} element={<Alert><h1>Welcome !</h1></Alert>}></Route>
                    <Route path={"timer"} element={<div><h1>Timer</h1><Outlet/></div>}>
                        <Route path={"1"}
                               element={<><Timer initialTime={10}></Timer><Timer initialTime={25}></Timer></>}></Route>
                    </Route>
                    <Route path={"timer2"} element={<Timer initialTime={30}></Timer>}></Route>
                    <Route path={"users"} element={<UserList/>}></Route>
                    <Route path={"usersView"} element={<UsersView/>}></Route>
                    <Route path={"fancy-border"} element={<FancyBorderView/>}></Route>
                    <Route path={"*"} element={<Alert variant={"danger"}>Page Not Found</Alert>}/>
                </Route>
            </Routes>
        </BrowserRouter>

    );
}

export default App;
