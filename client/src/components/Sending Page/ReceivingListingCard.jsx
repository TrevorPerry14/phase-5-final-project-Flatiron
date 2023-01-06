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
        .then(window.location.reload())
    }

    return (
        <div className='mb-5'>
            <div className='grid grid-cols-4 bg-[#D3D7D8] p-2 text-[#555555] font-bold'>
                <div className='col-span-3'>
                    1 Item worth {listing_price} from {"User goes here"}
                </div>
                <div>
                    <button onClick={handlePayment} className="inline-block px-2 py-2.5 bg-[#ffa64b] text-[#FFFFFF] font-bold text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out ">Mark Received</button>
                </div>
            </div>
            <div className='bg-[#ECF0F1] p-3 grid grid-cols-4'>
                <div>{console_id ? console_id : game_id}</div>
                <div>{console_id ? "Console" : "Game"}</div>
                <div>${listing_price}.00</div>
                <div>{"In Transit"}</div>
                
            </div>
            
        </div>
    )
}
