import React from 'react'
import ReceivingListingCard from './ReceivingListingCard'

export default function ReceivingCollection({ user, removeListing }) {

    const {listings} = user

    const filteredListings = listings?.filter((listing) =>
    listing.recieving == true)

    const receivingListings = filteredListings?.map((listing) =>
    <ReceivingListingCard key={listing.id} listing={listing} removeListing={removeListing}/>)

    return (
        <div>
            {receivingListings}
        </div>
    )
}
