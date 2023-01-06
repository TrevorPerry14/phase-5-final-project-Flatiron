import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ConsoleCard({ console, setCurrentConsole }) {
    const navigate = useNavigate()

    function handleClick() {
        setCurrentConsole(console)
        navigate('/consoledetails')
    }

    const {name, publisher, developer, release_date, number_of_players, loose_price, cib_price, image} = console

    
    return (
        <div className='grid grid-cols-3 grid-rows-3 bg-[#ECF0F1] pt-1 pb-1 pr-1 pl-1' >
            <div>Name:</div>
            <div className='col-span-2'>{name}</div>
            <div>Publisher:</div>
            <div className='col-span-2'>{publisher}</div>
            <button onClick={handleClick} className="inline-block  py-2.5 bg-red-300 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out">Details</button>
        </div>
    )
}
