import React, {useState} from 'react'

export default function SendingListingCard({ listing }) {
    const [currentListing, setCurrentListing] = useState(listing)

    const {id, user_id, console_id, game_id, listing_price, user, recieving} = listing

    function handleEdit(name, value) {
        setCurrentListing({
            ...currentListing,
            [name]: value,
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        const updatedListing = {
            recieving: true
        }
        fetch(`/listings/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedListing)
        })
        .then( res => res.json())
        .then(handleEdit)
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
            <div>Address: </div>
            <div>{user.shipping_address}</div>
            <button onClick={handleSubmit}>{recieving ? 'Shipped' : "Mark Shipped"}</button>
        </div>
    )
}
