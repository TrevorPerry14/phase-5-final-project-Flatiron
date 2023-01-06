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
        <div className="absolute top-8 left-[20%] right-[20%] bg-[#FFFFFF] pt-20 px-10 pb-40">
            <h2 className="font-bold mb-10 text-xl text-center">Sending</h2>
            <div className='grid grid-cols-4 bg-[#D3D7D8] p-2 mb-5 text-[#555555] font-bold'>
                <div>Item Name:</div>
                <div>Console / Game:</div>
                <div>Price:</div>
                <div>Status:</div>
            </div>
            <div>
                {listingsToSend}
            </div>
        </div>
    )
}
