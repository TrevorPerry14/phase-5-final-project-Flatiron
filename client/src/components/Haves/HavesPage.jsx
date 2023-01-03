import React from 'react'
import HaveForm from './HaveForm'
import HaveContainer from './HaveContainer'

export default function HavesPage({ haves, updateHaves }) {

    // const userId = sessionStorage.getItem("user_id")

    // const userHaves = haves.filter
    return (
        <div className="absolute top-20 left-[20%] right-[20%]">
            <h2 className="font-bold">HavesPage</h2>
            <div className='pb-5'>
                <HaveForm updateHaves={updateHaves}/>
            </div>
            <div>
                <HaveContainer haves={haves} />
            </div>
        </div>
    )
}
