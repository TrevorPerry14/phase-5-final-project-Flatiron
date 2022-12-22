import React from 'react';
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom"

export default function NavBar() {
    return (
        <div>
            <div className=" w-screen h-[40px] z-10 bg-green-200 fixed drop-shadow-lg outline space-x-4">
                <img />
                <NavLink to='/' className="absolute left-[4%] top-[20%]">Home</NavLink>
                <NavLink to='/login' className="absolute left-[8%] top-[20%]">LogIn!</NavLink>
                <NavLink to='/signup' className="absolute left-[12%] top-[20%]">SignUp!</NavLink>
                <NavLink to='/explore' className="absolute left-[17%] top-[20%]">Explore</NavLink>
            </div>
        </div>
    )
}
