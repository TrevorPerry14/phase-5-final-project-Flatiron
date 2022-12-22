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
                <button className="inline-block px-6 py-2.5 bg-yellow-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out">Edit</button>
                <button onClick={handleDelete} className="inline-block px-6 py-2.5 bg-red-300 text-gray-700 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out">Delete</button>
            </div>
        </div>
    )
}
