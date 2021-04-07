import React from 'react';
import Header from "./Header";
import Offer from "./Offer";

const MainSection = () => {
    return (
        <div>
            <div className='wrapper'>
                <Header/>
                <Offer/>
            </div>
            {/*<Scrolling/>*/}
            {/*<TypeOfCleaning/>*/}
        </div>
    );
};

export default MainSection;