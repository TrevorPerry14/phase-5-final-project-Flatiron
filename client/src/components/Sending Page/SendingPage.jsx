import React from 'react'
import SendingListingCard from './SendingListingCard'

export default function SendingPage({ listings }) {

    const id = sessionStorage.getItem("user_id")

    const sendingListings = listings.filter((listing) =>
    listing.sending_user == id)

    const listingsToSend = sendingListings.map((listing) => 
    <SendingListingCard key={listing.id} listing={listing}/>)

    return (
        <div>
            <h3>Sending</h3>
            {listingsToSend}
        </div>
    )
}
