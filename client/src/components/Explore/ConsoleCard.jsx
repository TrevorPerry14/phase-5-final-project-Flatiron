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
            <div>publisher: {publisher}</div>
            <button onClick={handleClick} className="inline-block px-6 py-2.5 bg-gray-300 text-gray-700 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out">Details</button>
        </div>
    )
}
