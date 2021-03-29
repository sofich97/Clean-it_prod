import './App.css';
import Footer from "./components/Footer";
import MainSection from "./components/MainSection/MainSection";
import TypeOfCleaning from "./components/TypeOfCleaning";
import React from "react";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div>
                <MainSection/>
                {/*<TypeOfCleaning/>*/}
                {/*<Footer/>*/}
            </div>
        </BrowserRouter>

    )
}

export default App;
