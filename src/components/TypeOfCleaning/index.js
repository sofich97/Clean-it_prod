import React from 'react';
import Regularly from "./Regularly";
import Deep from "./Deep";
import Office from "./Office";
import Windows from "./Windows";
import {Switch, Route} from "react-router-dom";

const TypeOfCleaning = () => {

    return (
        <Switch>
            <Route path="/regularly" component={Regularly}/>
            <Route path="/deep" component={Deep}/>
            <Route path="/office" component={Office}/>
            <Route path="/windows" component={Windows}/>
        </Switch>
    );
};

export default TypeOfCleaning;