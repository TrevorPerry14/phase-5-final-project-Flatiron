import React, { useState, useEffect } from 'react'
import ConsoleGameCard from './ConsoleGameCard'
import ConsoleListingCard from './ConsoleListingCard'

export default function ConsoleDetails({ currentConsole }) {
    const [ consoleInfo, setConsoleInfo ]  = useState([])

    useEffect(() => {
        fetch(`/consoles/${currentConsole.id}`)
        .then( res => res.json() )
        .then( data => setConsoleInfo(data) )
    }, [currentConsole])

    const { name, loose_price, cib_price, developer, publisher, release_date, number_of_players, games, listings} = consoleInfo

    const consoleGames = games?.map((game) => 
    <ConsoleGameCard key={game.id} game={game}/>
    )

    const consoleListings = listings?.map((listing) => 
    <ConsoleListingCard key={listing.id} listing={listing}/>
    )

    return (
        <div>
            <div>
                <div>
                    {name}
                    {loose_price}
                    {cib_price}
                </div>
                <div>
                    {release_date}
                    {publisher}
                    {developer}
                    {number_of_players}
                </div>
            </div>
            <h3>Games:</h3>
            <div>{consoleGames}</div>
            <h3>Lisitngs:</h3>
            <div>{consoleListings}</div>
        </div>
    )
}
