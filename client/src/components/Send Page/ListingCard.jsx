import React, {useState} from 'react'

export default function ListingCard({ listing }) {
    const [currentListing, setCurrentListing] = useState(listing)
    const [balance, setBalance] = useState(currentListing.user.wallet.amount)
 
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
        .then(handlePayment)
    }

    //this function takes the payment from the user when the package is claimed
    //if the user's balance didn't change until the package was recieved this could cause problems with user not having money in wallet to pay.
    
    function handlePayment() {
        const updatedBalance = {
            amount: (balance - listing_price)
        }

        fetch(`/wallets/${currentListing.user.wallet.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedBalance)
        })
        .then(res => res.json())
        .then(data => setBalance(data))
    }

    return (
        <div>
            <div>
                {user_id}
                balance: {listing.user.wallet.amount}
            </div>
            <div>
                {console_id}
                {game_id}
                {listing_price}
            </div>
            <button onClick={handleSubmit} className="inline-block px-6 py-2.5 bg-gray-300 text-gray-700 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out">Send To User</button>
        </div>
    )
}
