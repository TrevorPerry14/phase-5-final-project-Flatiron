import React, { useState, useEffect } from 'react'
import ListingCard from './ListingCard'

export default function ListingsContainer({ listings, consoleHaves, gameHaves }) {

    const ids = consoleHaves.map((have) => have.console_id)

    const gameIds = gameHaves.map((have) => have.game_id)

        const consoleListings = listings.filter((listing) => ids.includes(listing.console_id))

        const gameListings = listings.filter((listing) => gameIds.includes(listing.game_id))

        const haveListings = [...consoleListings, ...gameListings]

        

        const orderedListings = haveListings.sort((a, b) => (a.listing_price > b.listing_price) ? -1 : 1)

        const filteredListings = orderedListings.map((listing) => 
        <ListingCard 
        key={listing.id} 
        listing={listing}
        />)

    return (
        <div className="space-y-5 ">
            <div className='grid grid-cols-4 grid-rows-auto'>
                {filteredListings}
            </div>
        </div>
    ) 
}
