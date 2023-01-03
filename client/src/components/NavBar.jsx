import React from 'react';
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom"

export default function NavBar() {
    return (
        <div>
            <div className=" w-screen h-[40px] z-10 bg-[#34495E] fixed drop-shadow-lg space-x-4 text-[#FFFFFF]">
                <img />
                <NavLink to='/' className="absolute left-[20%] top-[20%]">Home</NavLink>
                <NavLink to='/login' className="absolute left-[24%] top-[20%]">LogIn!</NavLink>
                <NavLink to='/signup' className="absolute left-[28%] top-[20%]">SignUp!</NavLink>
                <NavLink to='/explore' className="absolute left-[32%] top-[20%]">Explore</NavLink>
            </div>
        </div>
    )
}
