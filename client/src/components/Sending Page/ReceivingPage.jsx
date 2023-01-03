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
        <div className="absolute top-20 left-[20%] right-[20%]">
            <h2 className="font-bold">Receiving Orders</h2>
            <div>
                <ReceivingCollection user={user} removeListing={removeListing}/>
            </div>
        </div>
    )
}
