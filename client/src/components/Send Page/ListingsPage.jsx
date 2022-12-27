import React, { useState, useEffect } from 'react'
import SearchFilter from './SearchFilter'
import ListingsContainer from './ListingsContainer'

export default function ListingsPage({ listings, haves }) {

    const activeListings = listings.filter((listing) =>
    listing.active == true)

    // const consoleListings = activeListings.filter((listing) =>
    // listing.console_id.name.includes(haves))

    const consoleHaves = haves.filter((have) =>
    have.console_listing == true)

    return (
        <div className="absolute top-20 left-5">
            <h2 className="font-bold ">Send Packages</h2>
            <div>
                <SearchFilter />
            </div>
            <div>
                <ListingsContainer listings={activeListings} consoleHaves={consoleHaves}/>
            </div>
        </div>
    )
}
