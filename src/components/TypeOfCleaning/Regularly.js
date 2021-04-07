import React from 'react';
import { GiLargePaintBrush } from 'react-icons/gi';
import {regularly} from "../../utils/constants";
import "../../css_modules/typeOfCleaning/regularly.modules.css"

const Regularly = () => {
    return (
        <div>
            <div className="container-fluid menu_line">
                <div className="row main_row">
                    <div className="col-4">
                        <img className="regularly" src={regularly} alt={regularly}/>
                    </div>
                    <div className="col-1"/>
                    <div className="col-7 main_col">
                        <div className="row">
                            <h1 className="menu_line_title">
                                Regularly
                            </h1>
                        </div>
                        <div className="row">
                            <div className="menu_line_icon col-1"><GiLargePaintBrush className="icon"/></div>
                            <div className="col">
                                <p className="menu_line_description">
                                    This is our standard – what we do with every order.
                                    <br/>We can also add custom services to customize your cleaning offer.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="menu_line_typeCleaning"/>
                            <p>
                                We wash the floor and wipe the baseboards
                                <br/>Carpets vacuuming (with your vacuum cleaner if you don’t have a
                                <br/>vacuum cleaner don’t worry, we brush carpets)
                                <br/>Wipe all accessible surfaces
                                <br/>Wipe the switches and door handles
                                <br/>We clean mirrors and glass surfaces
                                <br/>We collect and take out the garbage
                            </p>
                        </div>
                        <button className="menu_line_button">Check availability</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Regularly;