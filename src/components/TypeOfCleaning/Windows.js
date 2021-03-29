import React from 'react';
import "../../css_modules/typeOfCleaning/windows.modules.css"
import {GiLargePaintBrush} from "react-icons/gi";
import {windows} from "../../utils/constants";
import Scrolling from "../MainSection/Scrolling";

const Windows = () => {
    return (
        <div>
            <Scrolling/>
            <div className="container-fluid menu_line">
                <div className="row main_row">
                    <div className="col-4">
                        <img className="windows" src={windows} alt={windows}/>
                    </div>
                    <div className="col-1"/>
                    <div className="col-7 main_col">
                        <div className="row">
                            <h1 className="menu_line_title">
                                Windows
                            </h1>
                        </div>
                        <div className="row">
                            <div className="menu_line_icon col-1"><GiLargePaintBrush className="icon"/></div>
                            <div className="col">
                                <p className="menu_line_description">
                                    Our employee arrives with everything necessary at the
                                    <br/>agreed time and gets to work immediately.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="menu_line_typeCleaning"/>
                            <p>
                                Wash glass on both sides
                                <br/>We clean the frame inside and out
                                <br/>Washing mosquito nets
                                <br/>Wipe the window sills
                            </p>
                        </div>
                        <button className="menu_line_button">Check availability</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Windows;