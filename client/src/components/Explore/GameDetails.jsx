import React, { useState, useEffect } from 'react'
import GameListingCard from './GameListingCard'
// import SearchGameFilter from './SearchGameFilter'

export default function GameDetails({ currentGame }) {
    const [ gameInfo, setGameInfo ] = useState([])

    useEffect(() => {
        fetch(`/games/${currentGame.id}`)
        .then( res => res.json() )
        .then( data => setGameInfo(data) )
    }, [])

    const { name, loose_price, cib_price, console_id, release_date, publisher, developer, number_of_players, listings} = currentGame

    // const rank = listings.map((listing) => listings.indexOf(listing))
    // console.log(rank)

    const gameListings = listings?.map((listing) => 
    <GameListingCard key={listing.id} listing={listing} loose_price={loose_price} listings={listings}/>
    )

    return (
        <div className="absolute top-8 left-[20%] right-[20%] bg-[#FFFFFF] pt-20 px-10">
            {/* <div>
                <SearchGameFilter />
            </div> */}
            <div>
                <div className='text-xl font-bold text-center pb-10'>
                    {name}
                </div>
                <div className='grid grid-cols-2 bg- mb-10 gap-5 '>
                        <img src={currentGame.image ? require(`../../Assets/${currentGame.image}.jpg`) : require('../../Assets/Melee.jpg')} alt=''/>
                    <div className='grid grid-cols-2 grid-rows-6 bg-[#D3D7D8]'>
                        <div className='text-right pr-5'>Console:</div>
                        <div>{console_id}</div>
                        <div className='text-right pr-5'>Publisher:</div>
                        <div>{publisher}</div>
                        <div className='text-right pr-5'>Developer:</div>
                        <div>{developer}</div>
                        <div className='text-right pr-5'>Release Date:</div>
                        <div>{release_date}</div>
                        <div className='text-right pr-5'>Market Price</div>
                        <div>{loose_price}</div>
                        <div className='text-right pr-5'>Max Players:</div>
                        <div>{number_of_players}</div>
                    </div>
                </div>
                <div>
                    <h3 className='text-xl font-bold text-center pb-5 bg-[#D3D7D8] text-[#555555]' >Top Listings:</h3>
                    <div className='grid grid-cols-5 bg-[#D3D7D8] pl-5 text-[#555555] font-bold pb-2'>
                        <div>Rank:</div>
                        <div>Listing Price:</div>
                        <div>Market Price:</div>
                        <div>%</div>
                        <div>User:</div>
                    </div>
                    <div className='bg-[#ECF0F1] p-5'>{gameListings}</div>
                </div>
            </div>
        </div>
    )
}
