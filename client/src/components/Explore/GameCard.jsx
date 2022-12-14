import React from 'react'

export default function GameCard({ game }) {

    const {name, console_id, publisher, developer, number_of_players, loose_price, cib_price} = game
    return (
        <div>
            <div>
                {name}
                {loose_price}
                {cib_price}
            </div>
            <div>
                {console_id}
                {publisher}
                {developer}
                {number_of_players}
            </div>
        </div>
    )
}
