import React from 'react'
import HaveForm from './HaveForm'
import HaveContainer from './HaveContainer'

export default function HavesPage({ haves, updateHaves }) {

    // const userId = sessionStorage.getItem("user_id")

    // const userHaves = haves.filter
    return (
        <div className="absolute top-20 left-5">
            <div>HavesPage</div>
            <div>
                <HaveForm updateHaves={updateHaves}/>
            </div>
            <div>
                <HaveContainer haves={haves} />
            </div>
        </div>
    )
}
