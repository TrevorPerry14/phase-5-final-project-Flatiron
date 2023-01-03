import React, { useState, useEffect } from 'react'
import UserListingCollection from './UserListingCollection'
import AddListingForm from './AddListingForm'

export default function UserListingsPage({ removeListing, updateListings }) {
    const [ user, setUser ] = useState([])

    const currentUser = sessionStorage.getItem("user_id")
    
    useEffect(() => {
        fetch(`/users/${currentUser}`)
        .then(res => res.json())
        .then(data => setUser(data))
    }, [removeListing])

    

    // const myListings = user.listings.map((listing) => 
    //     <UserListingsCard 
    //     key={listing.id} 
    //     listing={listing}
    //     />)

    return (
        <div className="absolute top-20 left-[20%] right-[20%]">
            <h2 className="font-bold">My Wants</h2>
            <div className='pb-5'>
                <AddListingForm updateListings={updateListings}/>
            </div>
            <div>
                <UserListingCollection user={user} removeListing={removeListing}/>
            </div>
        </div>
    )
}
