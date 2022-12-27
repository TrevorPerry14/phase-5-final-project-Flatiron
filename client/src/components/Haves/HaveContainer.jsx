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
            {havesList}
        </div>
    )
}
