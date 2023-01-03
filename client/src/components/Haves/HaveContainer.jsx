import React from 'react'
import HaveCard from './HaveCard'

export default function HaveContainer({ haves }) {

    const userId = sessionStorage.getItem("user_id")

    const userHaves = haves.filter((have) => 
    have.user_id == userId)

    const havesList = userHaves.map((have) =>
    <HaveCard key={have.id} have={have}/>)

    return (
        <div>
            <div className='pt-16 bg-[#D3D7D8] font-bold'>
                <div className='absolute top-[35%] left-[2%] bg-[#D3D7D8]'>Item Name: </div>
                <div className='absolute top-[35%] left-[18%]'>Quantity:</div>
                <div className='absolute top-[35%] left-[32%] bg-[#D3D7D8]'>Game / Console:</div>
                <div className='absolute top-[32%] left-[53%] bg-[#D3D7D8]'>
                    <div>
                        Loose 
                    </div>
                    <div>
                    Market Price:
                    </div>
                </div>
                <div className='absolute top-[32%] left-[72%]'>
                    <div>
                        CIB 
                    </div>
                    <div>
                        Market Price:
                    </div>
                </div>
                <div className='absolute top-[35%] left-[90%] bg-[#D3D7D8]'>Status:</div>
            </div>
            <div className='pt-10'>
                {havesList}
            </div>
        </div>
    )
}
