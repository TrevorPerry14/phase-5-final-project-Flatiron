import React from 'react'

export default function ConsoleGameCard({ game }) {
    
    const {name, console_id, loose_price, cib_price, publisher, developer, release_date} = game
    return (
        <div className='grid grid-cols-2'>
            <div className='text-right pr-5'>{name}:</div>
            <div>${loose_price}.00</div>
        </div>
    )
}
