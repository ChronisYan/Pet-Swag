import React from "react";
import {NavLink} from "react-router-dom";

export default () =>{
    return (
        <nav className={"Navbar"}>
            <div className={"Navbar-navigation"}>
                <NavLink className={"Navbar-item"} to="/">Home</NavLink>
                <NavLink className={"Navbar-item"} to="/promos">Promotions</NavLink>
                <NavLink className={"Navbar-item"} to="/about">About</NavLink>
            </div>
            <div className={"Navbar-user"}>
                <button>Sign-in</button>
                <button>Sign-up</button>
            </div>
        </nav>
    )
}