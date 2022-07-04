import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import Gallery from "./main/Gallery";
import ErrorPage from "./main/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Gallery/>}></Route>
        <Route path={'*'} element={<ErrorPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
