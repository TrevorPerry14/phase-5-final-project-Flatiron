import React, { useState, useEffect } from 'react'
import ListingCard from './ListingCard'

export default function ListingsContainer({ listings }) {

    const allListings = listings.map((listing) => 
        <ListingCard 
        key={listing.id} 
        listing={listing}
        />)



    return (
        <div className="space-y-5">
            {allListings}
        </div>
    ) 
}
