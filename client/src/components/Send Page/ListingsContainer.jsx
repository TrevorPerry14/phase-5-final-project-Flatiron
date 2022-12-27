import React, { useState, useEffect } from 'react'
import ListingCard from './ListingCard'

export default function ListingsContainer({ listings, consoleHaves }) {

    const [ userListings, setUserListings ] = useState([])

    const filteredListings = consoleHaves.map((have) => listings.filter((listing) => listing.console_id === have.console_id))

    const allListings = listings.map((listing) => 
        <ListingCard 
        key={listing.id} 
        listing={listing}
        />)



    console.log(filteredListings)

    return (
        <div className="space-y-5">
            {allListings}
        </div>
    ) 
}
