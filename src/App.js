import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import AppDesk from "./App.desk";
import {Route, Routes} from "react-router-dom";
import AppFolio from "./web-folio/App.folio";
import Object from "./imovito/components/Object";


function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={"/"} element={<AppDesk/>}/>
                <Route path={"/app-folio"} element={<AppFolio/>}/>
                <Route path={"/object"} element={<Object/>}/>
            </Routes>
        </div>
    );
}

export default App;
