import React from 'react'

export default function UserListingsCard({ listing, removeListing }) {

    const {user_id, console_id, game_id, listing_price, id} = listing



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
                {console_id}
                {game_id}
                {listing_price}
            </div>
            <div>
                <button>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}
