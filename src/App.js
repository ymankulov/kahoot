import './App.css';
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import Section from "./components/Section";


function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Section/>}/>
            </Routes>
        </div>
    );
}

export default App;
