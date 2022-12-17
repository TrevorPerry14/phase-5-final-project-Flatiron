import React from 'react'

export default function ReceivingListingCard({ listing, removeListing }) {

    const {id, user_id, console_id, game_id, listing_price, user, recieving} = listing

    function handleDelete() {
        fetch(`/listings/${id}`, {
            method: 'DELETE',
        }).then(res => {
            if (res.ok) {
                removeListing(id)
            }
        })
    }

    return (
        <div>
            <div>
                {user_id}
            </div>
            <div>
                {console_id}
                {game_id}
                {listing_price}
            </div>
            <button onClick={handleDelete}>Mark Received</button>
        </div>
    )
}
