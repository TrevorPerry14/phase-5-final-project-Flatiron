import React, { useState, useEffect } from 'react'
import ConsoleGameCard from './ConsoleGameCard'
import ConsoleListingCard from './ConsoleListingCard'

export default function ConsoleDetails({ currentConsole }) {
    
    const { name, loose_price, cib_price, developer, publisher, release_date, number_of_players, games, listings} = currentConsole

    const consoleGames = games?.map((game) => 
    <ConsoleGameCard key={game.id} game={game}/>
    )

    const consoleListings = listings?.map((listing) =>
    <ConsoleListingCard key={listing.id} listing={listing} loose_price={loose_price} listings={listings}/>     
    )

    return (
        <div className="absolute top-8 left-[20%] right-[20%] bg-[#FFFFFF] pt-20 px-10">
            <div>
                <div className='text-xl font-bold text-center'>
                    {name}
                </div>
                <div className='grid grid-cols-2 grid-rows-2 gap-5 mb-5 '>
                    <img src={currentConsole.image ? require(`../../Assets/${currentConsole.image}.jpg`) : require('../../Assets/Gameboy.jpg')} alt='' className='row-span-2'/>
                    <div className='grid grid-cols-2 grid-rows-5 bg-[#D3D7D8] mt-10'>
                        <div className='text-right pr-6'>Publisher:</div>
                        <div>{publisher}</div>
                        <div className='text-right pr-6'>Developer:</div>
                        <div>{developer}</div>
                        <div className='text-right pr-6'>Release Date:</div>
                        <div>{release_date}</div>
                        <div className='text-right pr-6'>Market Price:</div>
                        <div>{loose_price}</div>
                        <div className='text-right pr-6'>Max Players:</div>
                        <div>{number_of_players}</div>
                    </div>
                    <div>
                        <div className='text-center pr-10 text-lg font-bold pb-5 bg-[#D3D7D8]'>Console Games:</div>
                        <div className='bg-[#ECF0F1]'>{consoleGames}</div>
                    </div>
                </div>
            </div>
            <div>
                <h3 className='text-xl font-bold text-center pb-5 bg-[#D3D7D8] text-[#555555]'>Listings:</h3>
                <div className='grid grid-cols-5 bg-[#D3D7D8] pl-5 text-[#555555] font-bold pb-2'>
                    <div>Rank:</div>
                    <div>Listing Price:</div>
                    <div>Market Price:</div>
                    <div>%</div>
                    <div>User:</div>
                </div>
                <div className='bg-[#ECF0F1] p-5'>{consoleListings}</div>
            </div>
        </div>
    )
}

