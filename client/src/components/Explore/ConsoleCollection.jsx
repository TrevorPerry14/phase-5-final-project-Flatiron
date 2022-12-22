import React from 'react'
import ConsoleCard from './ConsoleCard'

export default function ConsoleCollection({ consoles, setCurrentConsole }) {

    const consoleList = consoles.map((console) =>
    <ConsoleCard 
        key={console.id}
        console={console}
        setCurrentConsole={setCurrentConsole}
    />
    )
    return (
        <div className="space-y-5">
            {consoleList}
        </div>
    )
}
