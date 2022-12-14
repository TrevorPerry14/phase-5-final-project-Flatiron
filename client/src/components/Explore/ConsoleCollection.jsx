import React from 'react'
import ConsoleCard from './ConsoleCard'

export default function ConsoleCollection({ consoles }) {

    const consoleList = consoles.map((console) =>
    <ConsoleCard 
        key={console.id}
        console={console}
    />
    )
    return (
        <div>
            {consoleList}
        </div>
    )
}
