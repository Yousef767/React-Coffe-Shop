import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Nav extends Component{
    showCart = () => {
        document.getElementById('cart').classList.toggle('show');
    }
    render() {
        return (
            <nav>
                <ul>
                    <NavLink to='/'>
                        <i className="fa-light fa-house"></i>
                    </NavLink>
                    <NavLink to='/location'>
                        <i className="fa-light fa-location-dot"></i>
                    </NavLink>
                    <NavLink to='/cup' className='cup'onClick={this.showCart}>
                        <i className="fa-regular fa-cup-togo" ></i>
                        <span className="count" id="count">0</span>
                    </NavLink>
                    <NavLink to='/gifts'>
                        <i className="fa-light fa-gift"></i>
                    </NavLink>
                    <NavLink to='/login'>
                        <i className="fa-light fa-user"></i>
                    </NavLink>
                </ul>
            </nav>
        )
    }
}

export default Nav