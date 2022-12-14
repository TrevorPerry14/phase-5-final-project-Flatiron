import React from 'react';
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom"

export default function NavBar() {
    return (
        <div>
            <div>
                <img />
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/login'>LogIn!</NavLink>
                <NavLink to='/signup'>SignUp!</NavLink>
                <NavLink to='/explore'>Explore</NavLink>
            </div>
        </div>
    )
}
