import React, { useState, useEffect } from 'react'

export default function UserListingsPage() {
    const [ userListings, setUserListings ] = useState([])

    const currentUser = sessionStorage.getItem("user_id")
    // console.log(currentUser)
    useEffect(() => {
        
        fetch(`/users/${currentUser}`)
        .then(res => res.json())
        .then(data => setUserListings(data))
    }, [])

    
    return (
        <div>UserListingsPage</div>
    )
}
