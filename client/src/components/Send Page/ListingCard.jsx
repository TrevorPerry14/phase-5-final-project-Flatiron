import React from 'react'

export default function ListingCard({ listing }) {

    const { user_id, console_id, game_id, listing_price, active} = listing
    return (
        <div>
            <div>
                {user_id}
            </div>
            <div>
                {console_id}
                {game_id}
                {listing_price}
            </div>
            <button>Send To User</button>
        </div>
    )
}
