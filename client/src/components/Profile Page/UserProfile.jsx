import React from 'react'

export default function UserProfile({ user }) {
    const{ name, username, country, shipping_address } = user
    return (
        <div>
            UserProfile
            <div>
                <div>name: {name}</div>
                <div>username: {username}</div>
                <div>Address: {shipping_address}, {country}</div>
            </div>
        </div>
    )
}
