import React from 'react'

export default function ConsoleCard({ console }) {

    const {name, publisher, developer, release_date, number_of_players, loose_price, cib_price} = console

    
    return (
        <div>
            <div>
                name: {name}
            </div>
            <div>loose price: {loose_price}</div>
            <div>CIB price: {cib_price}</div>
            <div>release date: {release_date}</div>
            <div>publisher: {publisher}</div>
            <div>developer: {developer}</div>
            <div>number of players: {number_of_players}</div>

                
            
            <div>
                 
                
                
                
                
            </div>
        </div>
    )
}
