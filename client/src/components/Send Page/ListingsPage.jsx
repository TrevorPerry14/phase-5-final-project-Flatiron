import React, { useState, useEffect } from 'react'
import SearchFilter from './SearchFilter'
import ListingsContainer from './ListingsContainer'

export default function ListingsPage({ listings, haves }) {

    const activeListings = listings.filter((listing) =>
    listing.active == true)

    // const consoleListings = activeListings.filter((listing) =>
    // listing.console_id.name.includes(haves))

    const currentUser = sessionStorage.getItem('user_id')

    const userHaves = haves.filter((have) => have.user_id == currentUser) 

    const consoleHaves = userHaves.filter((have) =>
    have.console_listing == true)

    const gameHaves = userHaves.filter((have) => have.console_listing === false)

    return (
        <div className="absolute top-8 left-[16%] right-[20%] bg-[#FFFFFF] pt-20 px-10">
            <h2 className="font-bold text-xl text-center pb-10">Send Packages</h2>
            <div>
                    
            </div>
            <div>
                <ListingsContainer listings={activeListings} consoleHaves={consoleHaves} gameHaves={gameHaves}/>
            </div>
        </div>
    )
}
