import React from 'react'

export default function HaveCard({ have, removeHave }) {

    const {id} = have 

    function handleDelete() {
        fetch(`/haves/${id}`, {
            method: 'DELETE',
        }).then(res => {
            if (res.ok) {
                removeHave(id)
            }
        })
    }
    const { user, console, game, quantity, active, console_listing} = have
    return (
        <div className='bg-[#ECF0F1] mb-6'>
            <div className='grid grid-cols-5 pb-3 ml-[2%] '>
                <div >{console_listing ? console.name : game.name}</div>
                <div className='pl-6'>{quantity}</div>
                <div>{console_listing ? "Console" : "Game"}</div>
                <div className='pl-12'>$ {console_listing ?  console.loose_price : game.loose_price}.00</div>
                {/* <div className='pl-20'>$ {console_listing ? console.cib_price : game.cib_price}.00</div> */}
                <div className='pl-20'>{active ? "Active" : "Paused"}</div>
                {/* {console_listing ? : }
                {console_listing ? : } */}
            </div>
            <div>
            {/* <button className="inline-block px-6 py-2.5 bg-[#ffa64b] text-white font-bold text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out">Edit</button> */}
            <button className="inline-block px-6 py-2.5 bg-[#ffa64b] text-white font-bold text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out" onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}
