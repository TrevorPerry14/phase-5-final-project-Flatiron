import React from 'react'

export default function UserListingsCard({ listing, removeListing }) {

    const {user_id, console_id, game_id, listing_price, id, active} = listing

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
        <div className='bg-[#ECF0F1] mb-6'>
            <div className='grid grid-cols-6 pb-3 ml-[2%] '>
                <div>{console_id ? console_id : game_id}</div>
                <div>{console_id ? "Console" : "Game"}</div>
                <div>$ {listing_price}.00</div>
                <div>{active ? "active" : "Not Active"}</div>
                <div><button className="inline-block px-6 py-2.5 bg-[#ffa64b] text-white font-bold text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out">Edit</button></div>
                <div><button onClick={handleDelete} className="inline-block px-6 py-2.5 bg-red-400 text-white font-bold text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out">Delete</button></div>
            {/* </div>
            <div> */}
            </div>
        </div>
    )
}
