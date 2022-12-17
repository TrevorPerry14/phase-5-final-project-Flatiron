import React from 'react'
import SendingListingCard from './SendingListingCard'

export default function SendingPage({ listings }) {

    const id = sessionStorage.getItem("user_id")

    const filteredListings = listings.filter((listing) =>
    listing.sending_user == id)

    // const sendingListings = filteredListings.filter((listing) => 
    // listing.recieving == false)

    const listingsToSend = filteredListings.map((listing) => 
    <SendingListingCard key={listing.id} listing={listing}/>)

    return (
        <div>
            <h3>Sending</h3>
            {listingsToSend}
        </div>
    )
}
