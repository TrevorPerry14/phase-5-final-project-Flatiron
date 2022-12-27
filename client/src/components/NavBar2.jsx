import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";

export default function NavBar2({ user }) {

    const navigate = useNavigate()

    const { name, wallet } = user

    function handleLogOut() {
        sessionStorage.removeItem('user_id')
        navigate('/')
    }
    return (
    <div>
        <div className=" w-screen h-[40px] z-10 bg-green-200 fixed drop-shadow-lg outline space-x-4 ">
            <NavLink to='/' className="absolute left-[20%] top-[20%]">Home</NavLink>
            <NavLink to='wallet' className="absolute left-[23%] top-[20%]">${wallet?.amount}</NavLink>
            <NavLink to='/explore' className="absolute left-[26%] top-[20%]">Explore</NavLink>
            <NavLink to='/sendlistings' className="absolute left-[30%] top-[20%]">Send</NavLink>
            <NavLink to='haves' className='absolute left-[33%] top-[20%]'>Haves</NavLink>
            <NavLink to='/userlistings' className="absolute left-[36%] top-[20%]">My Wants</NavLink>
            <NavLink to='/sending' className="absolute left-[40.5%] top-[20%]">Sending</NavLink>
            <NavLink to='/receiving' className="absolute left-[44.25%] top-[20%]">Receiving</NavLink>
            <NavLink to='/userprofile' className="absolute left-[48.5%] top-[20%]">{name}</NavLink>
            
            
            <button onClick={handleLogOut} className="inline-block px-6 py-2.5 bg-gray-300 text-gray-700 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out absolute left-[89%] top-[5%]">Log Out</button>

        </div>
    </div>
    )
}
