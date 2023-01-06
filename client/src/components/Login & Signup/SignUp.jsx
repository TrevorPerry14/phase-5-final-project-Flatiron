import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

export default function SignUp({ users, setUsers }) {
    const [ formData, setFormData ] = useState('')
    const navigate = useNavigate()

    function addUser(newUser) {
        setUsers([...users, newUser])
    }

    function handleChange(e){
        const { name, value } = e.target;
        setFormData({...formData, [name]: value})
    }

    function handleLogin(newUser) {
        sessionStorage.setItem("user_id", newUser.id)
    }

    function handleSubmit() {
        // e.preventDefault();
        const newUser = {
            email: formData.email,
            password: formData.password,
            name: formData.name,
            username: formData.username,
            country: formData.country,
            shipping_address: formData.shipping_address
        }
        fetch(`users`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data => addUser(data))
        .then(handleLogin(newUser))
        .then(navigate("/"))
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="grid space-y-2 absolute top-[20%] left-[33%] h-2/3 w-1/3 bg-[#D3D7D8] p-10 text-[#555555]">
                <p className='text-xl'>Sign Up</p>
                <label className='text-base font-bold'>email:</label>
                <input name='email' type='text' onChange={handleChange}></input>
                <label className='text-base font-bold'>password:</label>
                <input name='password' type='text' onChange={handleChange}></input>
                <label className='text-base font-bold'>name:</label>
                <input name='name' type='text' onChange={handleChange}></input>
                <label className='text-base font-bold'>username:</label>
                <input name='username' type='text' onChange={handleChange}></input>
                <label className='text-base font-bold'>country:</label>
                <input name='country' type='text' onChange={handleChange}></input>
                <label className='text-base font-bold'>shipping address:</label> 
                <input name='shipping_address' type='text' onChange={handleChange}></input>
                <button className="inline-block px-6 py-2.5 bg-green-300 text-gray-700 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out">Sign Up!</button>
            </form>
        </div>
    )
}
