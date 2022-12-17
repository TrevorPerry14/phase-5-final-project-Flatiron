import React from 'react'

export default function SendingListingCard({ listing }) {

    const {user_id, console_id, game_id, listing_price, user} = listing
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
            <div>Address: </div>
            <div>{user.shipping_address}</div>
            <button>Marked Shipped</button>
        </div>
    )
}
