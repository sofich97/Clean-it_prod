import './App.css';
import Footer from "./components/Footer";
import MainSection from "./components/MainSection/MainSection";
import TypeOfCleaning from "./components/TypeOfCleaning";
import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Scrolling from "./components/TypeOfCleaning/Scrolling";

function App() {

    return (
        <BrowserRouter>
            <div>
                <MainSection/>
                <Route render={(routeProps) => <Scrolling {...routeProps}/>}/>
                {/*<Scrolling/>*/}
                {/*<TypeOfCleaning/>*/}
                {/*<Footer/>*/}
            </div>
        </BrowserRouter>

    )
}

export default App;
