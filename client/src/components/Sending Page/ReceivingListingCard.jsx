import React, { useEffect, useState } from 'react'

export default function ReceivingListingCard({ listing, removeListing }) {
    const [balance, setBalance] = useState('')

    useEffect(() => {
        fetch(`/wallets/${sending_user}`)
        .then(res => res.json())
        .then(data => setBalance(data.amount))
    }, [])


    const {id, user_id, console_id, game_id, listing_price, user, recieving, sending_user} = listing

    function handleDelete() {
        fetch(`/listings/${id}`, {
            method: 'DELETE',
        }).then(res => {
            if (res.ok) {
                removeListing(id)
            }
        })
    }

    function handlePayment() {
        const updatedBalance = {
            amount: (balance + listing_price)
        }
        console.log(sending_user)
        fetch(`/wallets/${sending_user}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedBalance)
        })
        .then(res => res.json())
        .then(data => setBalance(data))
        .then(handleDelete)
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
            <button onClick={handlePayment}>Mark Received</button>
        </div>
    )
}
