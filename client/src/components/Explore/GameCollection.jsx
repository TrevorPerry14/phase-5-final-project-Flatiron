import React from 'react'
import GameCard from './GameCard'

export default function GameCollection({ games, setCurrentGame }) {

    const gameList = games.map((game) =>
    <GameCard 
        key={game.id}
        game={game}
        setCurrentGame={setCurrentGame}
    />
    )

    return (
        <div className="space-y-5">
            {gameList}
        </div>
    )
}

