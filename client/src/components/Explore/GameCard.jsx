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
        <div className='grid grid-cols-6 grid-rows-4 bg-[#ECF0F1] pl-1 pt-1 pb-1'>
            <div className='col-span-2'>Name:</div>
            <div className='col-span-4 text-sm'>{name}</div>
            <div className='col-span-2'>Console:</div>
            <div className='col-span-4 text-sm'>{console_id}</div>
            <div className='col-span-2'>Publisher:</div>
            <div className='col-span-4 text-sm'>{publisher}</div>
            <button onClick={handleClick} className="inline- bg-red-300 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out col-span-2">Details</button>
        </div>
    )
}
