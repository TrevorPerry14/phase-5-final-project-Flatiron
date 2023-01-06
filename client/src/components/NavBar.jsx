import React from 'react';
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import Logo from "../Assets/Logo_Small.jpg"

export default function NavBar() {
    return (
        <div>
            <div className=" w-screen h-[60px] z-10 bg-red-300 fixed drop-shadow-lg space-x-4 font-white text-[#FFFFFF] pt-4 font-bold">
                <img />
                <NavLink to='/' className="absolute left-[20%] top-[20%]"><img src={Logo} alt=''/></NavLink>
                <NavLink to='/login' className="absolute left-[24%] top-[20%]">LogIn!</NavLink>
                <NavLink to='/signup' className="absolute left-[28%] top-[20%]">SignUp!</NavLink>
                <NavLink to='/explore' className="absolute left-[32%] top-[20%]">Explore</NavLink>
            </div>
        </div>
    )
}
