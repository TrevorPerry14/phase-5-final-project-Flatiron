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

    function handleSubmit() {
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
        .then(window.location.reload())
    }

    return (
        <div className='mb-5'>
            <div className='grid grid-cols-4 bg-[#D3D7D8] p-2 text-[#555555] font-bold'>
                <div>
                    1 Item worth ${listing_price} to {user_id}
                </div>
                <div className='col-span-2'>Address: {user.shipping_address}</div>
                <div>
                    {/* {recieving 
                    ?
                    <button onClick={handleSubmit} className="inline-block px-2 py-2.5 bg-[#1ABC9C] text-[#FFFFFF] font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"></button> 
                    :
                    <button onClick={handleSubmit} className="inline-block px-2 py-2.5 bg-[#FOAD4E] text-[#FFFFFF] font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"></button>} */}
                    <button onClick={handleSubmit} className="inline-block px-2 py-2.5 bg-[#ffa64b] text-[#FFFFFF] font-bold text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out">{recieving ? 'Shipped' : "Mark Shipped"}</button>
                </div>
            </div>
            <div className='bg-[#ECF0F1] p-3 grid grid-cols-4'>
                <div>{console_id ? console_id : game_id}</div>
                <div>{console_id ? "Console" : "Game"}</div>
                <div>${listing_price}.00</div>
                <div>{recieving ? "Shipped" : "Committed"}</div>
            </div>
        </div>
    )
}
