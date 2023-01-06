import React, { useState } from 'react'

export default function ConsoleListingCard({ listing, loose_price, listings }) {
    const { user_id, listing_price, id} = listing

    const percent = Math.round(listing_price / loose_price * 100)

    const rank = listings.findIndex((listing) => listing.id === id)

    console.log(rank)

    return (
        <div className='grid grid-cols-5'>
            <div>{(rank + 1)}</div>
            <div>${listing_price}.00</div>
            <div>${loose_price}.00</div>
            <div>{percent}%</div>
            <div>{user_id}</div>
        </div>
    )
}
