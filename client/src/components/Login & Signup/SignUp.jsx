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

    function handleSubmit(e) {
        e.preventDefault();
        const newUser = {
            email: formData.email,
            password: formData.password,
            name: formData.name,
            username: formData.name,
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
            <form onSubmit={handleSubmit}>
                <label>email:</label>
                <input name='email' type='text' onChange={handleChange}></input>
                <label>password</label>
                <input name='password' type='text' onChange={handleChange}></input>
                <label>name</label>
                <input name='name' type='text' onChange={handleChange}></input>
                <label>username</label>
                <input name='username' type='text' onChange={handleChange}></input>
                <label>country</label>
                <input name='country' type='text' onChange={handleChange}></input>
                <label>shipping address</label> 
                <input name='shipping_address' type='text' onChange={handleChange}></input>
                <button>Sign Up!</button>
            </form>
        </div>
    )
}
