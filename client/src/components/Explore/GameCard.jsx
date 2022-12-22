import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function GameCard({ game, setCurrentGame }) {

    const navigate = useNavigate()

    function handleClick() {
        setCurrentGame(game)
        navigate('/gamedetails')
    }

    const {name, console_id, publisher, developer, number_of_players, loose_price, cib_price} = game
    return (
        <div>
            <div>{name}</div>
            <div>console: {console_id}</div>
            <div>Publisher: {publisher}</div>
            <button onClick={handleClick} className="inline-block px-6 py-2.5 bg-gray-300 text-gray-700 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out">Details</button>
        </div>
    )
}
