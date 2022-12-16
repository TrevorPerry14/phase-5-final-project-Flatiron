import React from 'react'

export default function ConsoleGameCard({ game }) {
    
    const {name, console_id, loose_price, cib_price, publisher, developer, release_date} = game
    return (
        <div>
            <div>{name}</div>
            <div>{release_date}</div>
            <div>{developer}</div>
        </div>
    )
}
