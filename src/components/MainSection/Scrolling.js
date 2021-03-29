import React, {Component} from 'react';
import "../../css_modules/scrolling.modules.css"
import {regularly} from "../../utils/constants";
import {Link} from "react-router-dom";


class Scrolling extends Component {
    state = {
        choose: false
    }

    handleClick = () => {

       console.log(`Choosen from function`)
    }

    render() {
        const {choose} = this.state;

        // let typeClean = 'menu_title';
        // if(choose
        //     typeClean.it === <h3 id={a}/>
        // }

        return (
            <section className='menu'>
                <div className="container">
                    <div className="row">
                        <div className="col-3 d-flex justify-content-start">
                            <Link className="menu_title a" to='/regularly'>Regularly Cleaning</Link>
                        </div>
                        <div className="col-3 d-flex justify-content-center">
                            <Link className="menu_title b" to='/deep'>Deep Cleaning</Link>
                        </div>
                        <div className="col-3 d-flex justify-content-center">
                            <Link className="menu_title c" to='/office'>Office Cleaning</Link>
                        </div>
                        <div className="col-3 d-flex justify-content-end">
                            <Link className="menu_title d" to='/windows'>Windows Cleaning</Link>
                        </div>
                        <div className="menu_triangle" onClick={() => console.log('triangle')}/>
                    </div>
                </div>
                <div className='container-fluid menu_line'/>
            </section>

        );
    }
}

export default Scrolling;