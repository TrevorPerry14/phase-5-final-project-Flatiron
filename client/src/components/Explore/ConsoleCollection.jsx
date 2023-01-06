import React from 'react'
import ConsoleCard from './ConsoleCard'

export default function ConsoleCollection({ consoles, setCurrentConsole }) {

    const consoleList = consoles.map((console) =>
    <ConsoleCard 
        key={console.id}
        console={console}
        setCurrentConsole={setCurrentConsole}
        image={console.image}
    />
    )

    console.log(consoles)

    return (
        <div className="grid grid-cols-4 bg-[#D3D7D8] p-10 gap-8">
            {consoleList}
        </div>
    )
}
