import React from 'react'
import HaveCard from './HaveCard'

export default function HaveContainer({ haves, removeHave }) {

    const userId = sessionStorage.getItem("user_id")

    const userHaves = haves.filter((have) => 
    have.user_id == userId)

    const havesList = userHaves.map((have) =>
    <HaveCard key={have.id} have={have} removeHave={removeHave}/>)

    return (
        <div>
            <div className='pt-8 bg-[#D3D7D8] font-bold grid grid-cols-5 pb-3 '>
                <div className='pl-6'>Item Name: </div>
                <div className='pl-5'>Quantity:</div>
                <div className=''>Game / Console:</div>
                <div className='pl-8 '>
                    <div>
                    Market Price:
                    </div>
                </div>
                {/* <div className='pl-16'>
                    <div>
                        CIB 
                    </div>
                    <div>
                        Market Price:
                    </div>
                </div> */}
                <div className='pl-20'>Status:</div>
            </div>
            <div className='mt-5'>
                {havesList}
            </div>
        </div>
    )
}
