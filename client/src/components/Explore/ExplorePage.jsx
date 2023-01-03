import React, { useState, useEffect } from 'react'
import ConsoleCollection from './ConsoleCollection'
import GameCollection from './GameCollection'
import SearchConsoleFilter from './SearchConsoleFilter'
import SearchGameFilter from './SearchGameFilter'

export default function ExplorePage({ setCurrentConsole, setCurrentGame }) {
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
        <div className="absolute top-20 left-[20%] right-[20%]">
            <h1 className="grid place-items-center font-bold pb-10">Explore</h1>
            <div className="place-items-center pb-5">
                <button onClick={handleConsoleClick} className="inline-block px-6 py-2.5 bg-gray-300 text-gray-700 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out">Consoles</button>
                <button onClick={handleGameClick} className="inline-block px-6 py-2.5 bg-gray-300 text-gray-700 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out">Games</button>
            </div>
            <div className='pb-14'>
                {exploreConsoles 
                ? 
                <SearchConsoleFilter consoleSearch={consoleSearch} setConsoleSearch={setConsoleSearch}/> 
                : 
                <SearchGameFilter gameSearch={gameSearch} setGameSearch={setGameSearch}
                />}
            </div>
            <div>
                {exploreConsoles 
                ? 
                <ConsoleCollection consoles={displaySearchedConsoles} setCurrentConsole={setCurrentConsole}/> 
                : 
                <GameCollection games={displaySearchedGames} setCurrentGame={setCurrentGame}/>}
            </div>
        </div>
    )
}
