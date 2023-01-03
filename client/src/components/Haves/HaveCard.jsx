import React from 'react'

export default function HaveCard({ have }) {

    const { user, console, game, quantity, active, console_listing} = have
    return (
        <div>
            <div>
                {console_listing ? console.name : game.name}
                {quantity}
                {console_listing ? console.loose_price : game.loose_price}
                {console_listing ? console.cib_price : game.cib_price}
                {active ? "Active" : "Paused"}
                {/* {console_listing ? : }
                {console_listing ? : } */}
            </div>
            <div>
            <button className="inline-block px-6 py-2.5 bg-yellow-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out">Edit</button>
            <button className="inline-block px-6 py-2.5 bg-red-300 text-gray-700 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out">Delete</button>
            </div>
        </div>
    )
}
