import React, {useState, useEffect} from 'react'
import ReceivingCollection from './ReceivingCollection'

export default function ReceivingPage({ removeListing }) {
    const [ user, setUser ] = useState([])

    const currentUser = sessionStorage.getItem("user_id")

    useEffect(() => {
        fetch(`/users/${currentUser}`)
        .then(res => res.json())
        .then(data => setUser(data))
    }, [])

    return (
        <div className="absolute top-8 left-[20%] right-[20%] bg-[#FFFFFF] pt-20 px-10 pb-96">
            <h2 className="font-bold mb-10 text-xl text-center">Receiving Orders</h2>
            <div className='grid grid-cols-4 bg-[#D3D7D8] p-2 mb-5 text-[#555555] font-bold'>
                <div>Item Name:</div>
                <div>Console / Game:</div>
                <div>Price:</div>
                <div>Status:</div>
            </div>
            <div>
                <ReceivingCollection user={user} removeListing={removeListing}/>
            </div>
        </div>
    )
}
