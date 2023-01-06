import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "./../Assets/Logo_Small.jpg"

export default function NavBar2({ user }) {

    const navigate = useNavigate()

    const { name, wallet } = user

    function handleLogOut() {
        sessionStorage.removeItem('user_id')
        window.location.reload()
        navigate('/')
    }
    return (
    <div>
        <div className=" w-screen h-[60px] z-10 bg-red-300 fixed drop-shadow-lg space-x-4 font-white text-[#FFFFFF] pt-4 font-bold">
        {/* <div className='grid grid-cols-9 bg-red-300 w-screen h-[60px] z-10 drop-shadow-lg space-x-4 font-white text-[#FFFFFF] pt-4 font-bold'>  */}
            <NavLink to='/' className="absolute left-[20%] top-2"><img src={Logo} alt=''/></NavLink>
            <NavLink to='wallet' className="pl-[22.5%]">${wallet?.amount}</NavLink>
            <NavLink to='/explore' className="pl-4">Explore</NavLink>
            <NavLink to='/sendlistings' className="pl-4">Send</NavLink>
            <NavLink to='haves' className='pl-4'>Haves</NavLink>
            <NavLink to='/userlistings' className="pl-4">My Wants</NavLink>
            <NavLink to='/sending' className="pl-4">Sending</NavLink>
            <NavLink to='/receiving' className="pl-4">Receiving</NavLink>
            <NavLink to='/userprofile' className="pl-4">{name}</NavLink>
            
            
            <button onClick={handleLogOut} className="inline-block px-6 py-2.5 bg-gray-300 text-gray-700 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out absolute left-[89%] top-[20%]">Log Out</button>

        </div>
    </div>
    )
}
