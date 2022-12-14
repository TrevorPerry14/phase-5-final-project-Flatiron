import React from 'react'
import { NavLink } from "react-router-dom";

export default function NavBar2() {
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/explore'>Explore</NavLink>
            <NavLink>Send</NavLink>
            <NavLink>My Wants</NavLink>
            <NavLink>Sending</NavLink>
            <NavLink>Profile</NavLink>
        </div>
    )
}
