import React from 'react'
import UserListingCard from './UserListingCard'

export default function UserListingCollection({ user, removeListing }) {

    const {listings} = user
    
    const myListings = listings?.map((listing) => 
    <UserListingCard key={listing.id} listing={listing} removeListing={removeListing}/>
    )



    return (
        <div>
            <div className='pt-8 bg-[#D3D7D8] font-bold grid grid-cols-6 pb-3 mb-5'>
                <div className='pl-5'>Item Name: </div>
                {/* <div className=''>Quantity:</div> */}
                <div className=''>Game / Console:</div>
                <div className=''>
                    <div>
                        Listing Price:
                    </div>
                </div>
                {/* <div className=''>
                    <div>
                        CIB 
                    </div>
                    <div>
                        Market Price:
                    </div>
                </div> */}
                <div className='pl-2'>Status:</div>
            </div>
            <div>
                {myListings}
            </div>
        </div>
    )
}
