import React from 'react'
import HaveForm from './HaveForm'
import HaveContainer from './HaveContainer'

export default function HavesPage({ haves, updateHaves, removeHave }) {

    // const userId = sessionStorage.getItem("user_id")

    // const userHaves = haves.filter
    return (
        <div className="absolute top-8 left-[20%] right-[20%] bg-[#FFFFFF] pt-20 px-10">
            <h2 className="font-bold text-xl text-center">HavesPage</h2>
            <div className='pb-5'>
                <HaveForm updateHaves={updateHaves}/>
            </div>
            <div>
                <HaveContainer haves={haves} removeHave={removeHave}/>
            </div>
        </div>
    )
}
