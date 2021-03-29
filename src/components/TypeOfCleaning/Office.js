import React from 'react';
import "../../css_modules/typeOfCleaning/office.modules.css"
import {GiLargePaintBrush} from "react-icons/gi";
import {office} from "../../utils/constants";
import Scrolling from "../MainSection/Scrolling";

const Office = () => {
    return (
        <div>
            <Scrolling/>
            <div className="container-fluid menu_line">
                <div className="row main_row">
                    <div className="col-4">
                        <img className="office" src={office} alt={office}/>
                    </div>
                    <div className="col-1"/>
                    <div className="col-7 main_col">
                        <div className="row">
                            <h1 className="menu_line_title">
                                Office
                            </h1>
                        </div>
                        <div className="row">
                            <div className="menu_line_icon col-1"><GiLargePaintBrush className="icon"/></div>
                            <div className="col">
                                <p className="menu_line_description">
                                    The cleaner comes every morning or evening to
                                    <br/>restore cleanliness and order.
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

export default Office;