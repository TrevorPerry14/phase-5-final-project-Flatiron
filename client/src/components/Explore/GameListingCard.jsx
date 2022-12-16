import React from 'react'

export default function GameListingCard({ listing }) {

    const { user_id, listing_price } = listing 
    return (
        <div>
            <div>{user_id}</div>
            <div>{listing_price}</div>
        </div>
    )
}
