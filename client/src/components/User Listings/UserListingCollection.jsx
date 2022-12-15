import React from 'react'
import UserListingCard from './UserListingCard'

export default function UserListingCollection({ user, removeListing }) {

    const {listings} = user
    
    const myListings = listings?.map((listing) => <UserListingCard key={listing.id} listing={listing} removeListing={removeListing}/>)



    return (
        <div>
            {myListings}
        </div>
    )
}
