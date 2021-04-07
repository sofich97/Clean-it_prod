import React, {useEffect, useState} from 'react';
import "../../css_modules/scrolling.modules.css"
import {Link} from "react-router-dom";
import TypeOfCleaning from "./index";


const Scrolling = (props) => {
    const [marginTriangle, setMarginTriangle] = useState('')

    useEffect(() => {
        if (props.location.pathname.split('/')[1]) {
            setMarginTriangle(`${props.location.pathname.split('/')[1]}_margin`)
        }
    }, [props.location.pathname])

    return (
        <section className='menu'>
            <div className="container">
                <div className="row">
                    <div className="col-3 d-flex justify-content-start">
                        <Link className="menu_title a" to="/regularly">Regularly Cleaning</Link>
                    </div>
                    <div className="col-3 d-flex justify-content-center">
                        <Link className="menu_title b" to="/deep">Deep Cleaning</Link>
                    </div>
                    <div className="col-3 d-flex justify-content-center">
                        <Link className="menu_title c" to="/office">Office Cleaning</Link>
                    </div>
                    <div className="col-3 d-flex justify-content-end">
                        <Link className="menu_title d" to="/windows">Windows Cleaning</Link>
                    </div>
                    <div className={`menu_triangle ${marginTriangle}`}/>
                </div>
            </div>
            <div className="container-fluid menu_line"/>
            <TypeOfCleaning/>
        </section>
    );
}

export default Scrolling;