import React from 'react'

export default function ConsoleCard({ console }) {

    const {name, publisher, developer, release_date, number_of_players, loose_price, cib_price} = console

    
    return (
        <div>
            <div>
                {name}
                {loose_price}
                {cib_price}
            </div>
            <div>
                Console Info 
                {release_date}
                {publisher}
                {developer}
                {number_of_players}
            </div>
        </div>
    )
}
