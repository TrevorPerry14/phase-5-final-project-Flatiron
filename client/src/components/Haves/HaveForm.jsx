import React, { useState } from 'react'

export default function HaveForm({ updateHaves }) {
    const [ formData, setFormData ] = useState('')

    const userId = sessionStorage.getItem("user_id")

    function handleSubmit(e) {
        e.preventDefault()
        const newHave = {
            user_id: userId,
            console_id: formData.console_id,
            game_id: formData.game_id,
            quantity: formData.quantity,
            active: true,
            console_listing: formData.console_listing,
        }

        fetch('/haves', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newHave)
        })
        .then(res => res.json())
        .then(data => updateHaves(data))
    }

    function handleChange(e){
        const { name, value } = e.target 
        setFormData({
            ...formData, [name]: value
        })
    }

    function handleSelect(e) {
        const {name, value} = e.target;
        setFormData({
            ...formData, [name]: parseInt(value)
        })
    }

    return (
        <div >
            <form onSubmit={handleSubmit} className='bg-[#D3D7D8] p-2 grid grid-cols-2 grid-rows-3 pl-10 pt-5 mt-5 mb-5'>
                <div>
                <label>Console or Game : </label>
                <select name='console_listing' onChange={handleChange}>
                    <option></option>
                    <option value={true}>Console</option>
                    <option value={false}>Game</option>
                </select>
                </div>
                <div>
                <label>Console(only if selling console):  </label>
                <select name='console_id' onChange={handleSelect}>
                    <option></option>
                    <option value='1'>Nintendo NES</option>
                    <option value='2'>Super Nintendo</option>
                    <option value='3'>Nintendo 64</option>
                    <option value='4'>Nintendo Gamecube</option>
                    <option value='5'>GameBoy</option>
                </select>
                </div>
                <div>
                <label>Game(only if selling game):  </label>
                <select name='game_id' onChange={handleSelect}>
                    <option></option>
                    <option value='1'>Super Mario Bros</option>
                    <option value='2'>Super Mario Bros 2</option>
                    <option value='3'>Legend of Zelda</option>
                    <option value='4'>Final Fantasy</option>
                    <option value='5'>Zelda Link To The Past</option>
                    <option value='6'>Super Metroid</option>
                    <option value='7'>Donkey Kong Country</option>
                    <option value='8'>Super Mario Kart</option>
                    <option value='9'>Super Mario 64</option>
                    <option value='10'>Zelda Ocarina of Time</option>
                    <option value='11'>007 Golden Eye</option>
                    <option value='12'>Mario Kart 64</option>
                    <option value='13'>Super Smash Bros Melee</option>
                    <option value='14'>Zelda Wind Waker</option>
                    <option value='15'>Pokemon Colosseum</option>
                    <option value='16'>Luigi's Mansion</option>
                    <option value='17'>Pokemon Red</option>
                    <option value='18'>Pokemon Yellow</option>
                    <option value='19'>Pokemon Blue</option>
                    <option value='20'>Zelda Link's Awakening</option>
                </select>
                </div>
                <div>
                <label>Quantity:  </label>
                <input type='text' name='quantity' onChange={handleChange}/>
                </div>
                <div>
                <button className="inline-block px-6 py-2.5 bg-[#435d7e] text-white font-bold text-xs leading-tight uppercase rounded-full shadow-md  focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out">Add</button>
                </div>
                
                
                <label></label>
            </form>
        </div>
    )
}
