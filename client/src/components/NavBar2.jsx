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
            <NavLink to='/'>Home          </NavLink>
            <NavLink>Wallet: ${wallet?.amount}          </NavLink>
            <NavLink to='/explore'>Explore          </NavLink>
            <NavLink to='/sendlistings'>Send          </NavLink>
            <NavLink to='/userlistings'>My Wants          </NavLink>
            <NavLink to='/sending'>Sending          </NavLink>
            <NavLink to='/receiving'>Receiving           </NavLink>
            <NavLink to='/userprofile'>{name}          </NavLink>
            
            <div>
                <button onClick={handleLogOut}>Log Out</button>
            </div>
        </div>
    )
}
