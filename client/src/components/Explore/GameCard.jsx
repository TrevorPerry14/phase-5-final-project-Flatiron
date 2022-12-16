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
            <div>loose: {loose_price}</div>
            <div>CIB: {cib_price}</div>
            <div>console: {console_id}</div>
            <div>Publisher: {publisher}</div>
            <div>Developer: {developer}</div>
            <div>players: {number_of_players}</div>
            <button onClick={handleClick}>Details</button>
        </div>
    )
}
