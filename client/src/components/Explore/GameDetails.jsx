import React, { useState, useEffect } from 'react'
import GameListingCard from './GameListingCard'

export default function GameDetails({ currentGame }) {
    const [ gameInfo, setGameInfo ] = useState([])

    useEffect(() => {
        fetch(`/games/${currentGame.id}`)
        .then( res => res.json() )
        .then( data => setGameInfo(data) )
    }, [])

    const { name, loose_price, cib_price, console_id, release_date, publisher, developer, number_of_players, listings} = gameInfo

    const gameListings = listings?.map((listing) => 
    <GameListingCard key={listing.id} listing={listing}/>
    )

    return (
        <div>
            <div>
                <div>{name}</div>
                <div>
                    {loose_price}
                    {cib_price}
                </div>
                <div>{console_id}</div>
                <div>{release_date}</div>
                <div>
                    {publisher}
                    {developer}
                </div>
                <div>{number_of_players}</div>
            </div>
            <h3>Listings:</h3>
            <div>{gameListings}</div>
        </div>
    )
}
