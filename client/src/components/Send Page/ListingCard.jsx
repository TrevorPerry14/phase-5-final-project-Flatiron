import React, {useState} from 'react'

export default function ListingCard({ listing }) {
    const [currentListing, setCurrentListing] = useState(listing)

    const { id, user_id, console_id, game_id, listing_price, sending_user, active} = listing

    function handleEdit(name, value) {
        setCurrentListing({
            ...currentListing,
            [name]: value,
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        const currentId = sessionStorage.getItem("user_id")
        const updatedListing = {
            sending_user: currentId,
            active: false,
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
            <button onClick={handleSubmit}>Send To User</button>
        </div>
    )
}
