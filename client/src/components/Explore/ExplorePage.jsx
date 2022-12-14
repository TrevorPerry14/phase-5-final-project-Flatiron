import React, { useState, useEffect } from 'react'
import ConsoleCollection from './ConsoleCollection'
import GameCollection from './GameCollection'

export default function ExplorePage() {
    const [consoles, setConsoles] = useState([])
    const [games, setGames] = useState([])
    const [exploreConsoles, setExploreConsoles] = useState(true)

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
    return (
        <div>
            <h1>Explore</h1>
            <div>
                <button onClick={handleConsoleClick}>Consoles</button>
                <button onClick={handleGameClick}>Games</button>
            </div>
            <div>
                {exploreConsoles ? <ConsoleCollection consoles={consoles}/> : <GameCollection games={games}/>}
            </div>
        </div>
    )
}
