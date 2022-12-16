import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ConsoleCard({ console, setCurrentConsole }) {
    const navigate = useNavigate()

    function handleClick() {
        setCurrentConsole(console)
        navigate('/consoledetails')
    }

    const {name, publisher, developer, release_date, number_of_players, loose_price, cib_price} = console

    
    return (
        <div>
            <div>
                name: {name}
            </div>
            <div>loose price: {loose_price}</div>
            <div>CIB price: {cib_price}</div>
            <div>release date: {release_date}</div>
            <div>publisher: {publisher}</div>
            <div>developer: {developer}</div>
            <div>number of players: {number_of_players}</div>
            <button onClick={handleClick}>Details</button>
        </div>
    )
}
