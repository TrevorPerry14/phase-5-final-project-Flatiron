import React, { useState, useEffect } from 'react'
import SearchFilter from './SearchFilter'
import ListingsContainer from './ListingsContainer'

export default function ListingsPage({ listings }) {

    const activeListings = listings.filter((listing) =>
    listing.active == true)

    return (
        <div>
            <h2>Send Packages</h2>
            <div>
                <SearchFilter />
            </div>
            <div>
                <ListingsContainer listings={activeListings}/>
            </div>
        </div>
    )
}
