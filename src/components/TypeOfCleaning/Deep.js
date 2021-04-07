import React from 'react';
import "../../css_modules/typeOfCleaning/deep.modules.css"
import {deep} from "../../utils/constants";
import {GiLargePaintBrush} from "react-icons/gi";


const Deep = () => {
    return (
        <div>
            <div className="container-fluid menu_line">
                <div className="row main_row">
                    <div className="col-4">
                        <img className="deep" src={deep} alt={deep}/>
                    </div>
                    <div className="col-1"/>
                    <div className="col-7 main_col">
                        <div className="row">
                            <h1 className="menu_line_title">
                                Deep
                            </h1>
                        </div>
                        <div className="row">
                            <div className="menu_line_icon col-1"><GiLargePaintBrush className="icon"/></div>
                            <div className="col">
                                <p className="menu_line_description">
                                    When our team comes to you, is managed by the manager.
                                    <br/>The manager evaluates the duration, checks the quality and
                                    <br/>answers all your questions.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="menu_line_typeCleaning"/>
                            <p>
                                Wipe all accessible surfaces, switches and door handles
                                <br/>Washing windows, mirrors and glass surfaces
                                <br/>Washing furniture inside and outside
                                <br/>Wiping the walls
                                <br/>Washing chandeliers and lamps
                                <br/>We wash the floor, wipe the baseboards and vacuum the carpet
                                <br/>We take out the garbage
                            </p>
                        </div>
                        <button className="menu_line_button">Check availability</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Deep;