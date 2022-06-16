import './App.css';
import {Route, Routes} from "react-router-dom";
import Section from "./components/Section";
import Header from "./components/Header";
import Admin from "./components/Pages/admin";


function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Section/>}/>
                <Route path="/connect" element={<Admin/>}/>
            </Routes>
        </div>
    );

}

export default App;
