import React, { useState, useEffect } from 'react'
import SearchFilter from './SearchFilter'
import ListingsContainer from './ListingsContainer'

export default function ListingsPage() {

    const [listings, setListings ] = useState([])

    useEffect(() => {
        fetch(`/listings`)
        .then(res => res.json())
        .then(data => setListings(data))
    }, [])
    
    return (
        <div>
            <div>
                <SearchFilter />
            </div>
            <div>
                <ListingsContainer listings={listings}/>
            </div>
        </div>
    )
}
