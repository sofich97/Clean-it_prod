import './App.css';
import Footer from "./components/Footer";
import MainSection from "./components/MainSection/MainSection";
import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Scrolling from "./components/TypeOfCleaning/Scrolling";
import EasybaseProvider from "easybase-react";
import ebconfig from "./ebconfig";

function App() {

    return (
        // <EasybaseProvider ebconfig={ebconfig}>
            <BrowserRouter>
                <div>
                    <MainSection/>
                    <Route render={(routeProps) => <Scrolling {...routeProps}/>}/>
                    {/*<Footer/>*/}
                </div>
            </BrowserRouter>
        // </EasybaseProvider>


    )
}

export default App;
