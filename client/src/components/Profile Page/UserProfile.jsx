import React from 'react'

export default function UserProfile({ user }) {
    const{ name, username, country, shipping_address } = user
    return (
        <div>
            <div className="absolute top-28 left-[20%] right-[20%]">
                <div className="font-bold text-xl text-center">UserProfile</div>
            </div>
            <div className="grid absolute top-[20%] left-[37.5%] bg-[#D3D7D8] h-1/3 w-1/4 p-5 text-[#555555] grid-cols-5">
                <div className='text-right pr-5 font-bold'>name:</div>
                <div className='col-span-4'>{name}</div>
                <div className='text-right pr-5 font-bold'>username:</div>
                <div className='col-span-4'>{username}</div>
                <div className='text-right pr-5 font-bold'>Address:</div>
                <div className='col-span-4'>{shipping_address}</div>
                <div className='text-right pr-5 font-bold'>Country:</div>
                <div className='col-span-4'>{country}</div>
            </div>
        </div>
    )
}
