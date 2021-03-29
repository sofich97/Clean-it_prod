import React from 'react';
import Header from "./Header";
import Offer from "./Offer";
import Scrolling from "./Scrolling";
import Deep from "../TypeOfCleaning/Deep";
import Office from "../TypeOfCleaning/Office";
import Windows from "../TypeOfCleaning/Windows";
import Regularly from "../TypeOfCleaning/Regularly";
import TypeOfCleaning from "../TypeOfCleaning";

const MainSection = () => {
    return (
        <div>
            <div className='wrapper'>
                <Header/>
                <Offer/>
            </div>
            <TypeOfCleaning/>
        </div>
    );
};

export default MainSection;