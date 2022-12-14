import React from 'react'
import GameCard from './GameCard'

export default function GameCollection({ games }) {

    const gameList = games.map((game) =>
    <GameCard 
        key={game.id}
        game={game}
    />
    )

    return (
        <div>
            {gameList}
        </div>
    )
}

