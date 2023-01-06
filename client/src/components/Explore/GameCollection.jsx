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
        <div className="grid grid-cols-4 bg-[#D3D7D8] p-10 gap-10">
            {gameList}
        </div>
    )
}

