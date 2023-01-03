import React from 'react'
import UserListingCard from './UserListingCard'

export default function UserListingCollection({ user, removeListing }) {

    const {listings} = user
    
    const myListings = listings?.map((listing) => 
    <UserListingCard key={listing.id} listing={listing} removeListing={removeListing}/>
    )



    return (
        <div>
            <div className='pt-16 bg-[#D3D7D8] font-bold'>
                <div className='absolute top-[43%] left-[2%] bg-[#D3D7D8]'>Item Name: </div>
                <div className='absolute top-[43%] left-[18%]'>Quantity:</div>
                <div className='absolute top-[43%] left-[32%] bg-[#D3D7D8]'>Game / Console:</div>
                <div className='absolute top-[40%] left-[53%] bg-[#D3D7D8]'>
                    <div>
                        Loose 
                    </div>
                    <div>
                    Market Price:
                    </div>
                </div>
                <div className='absolute top-[40%] left-[72%]'>
                    <div>
                        CIB 
                    </div>
                    <div>
                        Market Price:
                    </div>
                </div>
                <div className='absolute top-[43%] left-[90%] bg-[#D3D7D8]'>Status:</div>
            </div>
            <div>
                {myListings}
            </div>
        </div>
    )
}
