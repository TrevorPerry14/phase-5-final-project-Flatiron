import React, { useState, useEffect } from 'react'
import ConsoleCollection from './ConsoleCollection'
import GameCollection from './GameCollection'
import SearchConsoleFilter from './SearchConsoleFilter'
import SearchGameFilter from './SearchGameFilter'

export default function ExplorePage() {
    const [consoles, setConsoles] = useState([])
    const [games, setGames] = useState([])
    const [exploreConsoles, setExploreConsoles] = useState(true)
    const [consoleSearch, setConsoleSearch] = useState('')
    const [gameSearch, setGameSearch] = useState('')

    useEffect(() => {
        fetch('/consoles')
        .then(res => res.json())
        .then(data => setConsoles(data))
    }, [])

    useEffect(() => {
        fetch('/games')
        .then(res => res.json())
        .then(data => setGames(data))
    }, [])

    function handleConsoleClick() {
        setExploreConsoles(true)
    }

    function handleGameClick() {
        setExploreConsoles(false)
    }

    const displaySearchedConsoles = consoles.filter((console) =>
    console.name.toLowerCase().includes(consoleSearch.toLowerCase())
    )

    const displaySearchedGames = games.filter((game) =>
    game.name.toLowerCase().includes(gameSearch.toLowerCase())
    )


    return (
        <div>
            <h1>Explore</h1>
            <div>
                {exploreConsoles 
                ? 
                <SearchConsoleFilter consoleSearch={consoleSearch} setConsoleSearch={setConsoleSearch}/> 
                : 
                <SearchGameFilter gameSearch={gameSearch} setGameSearch={setGameSearch}
                />}
            </div>
            <div>
                <button onClick={handleConsoleClick}>Consoles</button>
                <button onClick={handleGameClick}>Games</button>
            </div>
            <div>
                {exploreConsoles ? <ConsoleCollection consoles={displaySearchedConsoles}/> : <GameCollection games={displaySearchedGames}/>}
            </div>
        </div>
    )
}
