import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export default function LogIn() {
    const [formData, setFormData] = useState('')
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const currentUser = sessionStorage.getItem("user_id")
        if (currentUser) {
            navigate("/")
        }
    }, [])
    
    const { username, password} = formData 

    function handleLogin(user) {
        sessionStorage.setItem("user_id", user.id)
    }

    function onSubmit() {
        const user = {
            username, 
            password
        }
        fetch(`/login`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json().then(currentUser => handleLogin(currentUser)).then(() => {navigate("/")})
            }else {
                res.json().then(json => setErrors(json.errors))
            }
        })
    }

    function handleChange(e) {
        const { name, value } = e.target 
        setFormData({...formData, [name]: value})
    }

    
    return (
        <div >
            <form onSubmit={onSubmit} className="grid place-items-center space-y-4 absolute top-[20%] left-[42%]">
                <label>Username:</label>
                <input type='username' name='username' value={username} onChange={handleChange}></input>
                <label>Password:</label>
                <input type='password' name='password' value={password} onChange={handleChange} ></input>
                <button className="inline-block px-6 py-2.5 bg-green-300 text-gray-700 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out">Log In!</button>
            </form>
            {errors? <div>{errors}</div>:null}
        </div>
    )
}
