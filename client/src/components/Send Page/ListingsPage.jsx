import React, { useState, useEffect } from 'react'
import SearchFilter from './SearchFilter'
import ListingsContainer from './ListingsContainer'

export default function ListingsPage({ listings }) {

    



    return (
        <div>
            <h2>Send Packages</h2>
            <div>
                <SearchFilter />
            </div>
            <div>
                <ListingsContainer listings={listings}/>
            </div>
        </div>
    )
}
