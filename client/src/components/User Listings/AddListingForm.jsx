import React, { useState } from 'react'

export default function AddListingForm({ updateListings }) {
    const [ formData, setFormData] = useState('')

    const id = sessionStorage.getItem('user_id')

    function handleSubmit(e) {
        e.preventDefault();
        const newListing = {
            user_id: id,
            console_id: formData.console_id,
            game_id: formData.game_id,
            listing_price: formData.listing_price
        }
        fetch(`/listings`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newListing)
        })
        .then(res => res.json())
        .then(data => updateListings(data))
    }

    function handleChange(e) {
        const {name, value} = e.target;
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
        <div>
            <h2>Add Want Here</h2>
            <form onSubmit={handleSubmit}>
                <label>Console(only if selling console)</label>
                <select name='console_id' onChange={handleSelect}>
                    <option></option>
                    <option value='1'>Nintendo NES</option>
                    <option value='2'>Super Nintendo</option>
                    <option value='3'>Nintendo 64</option>
                    <option value='4'>Nintendo Gamecube</option>
                    <option value='5'>GameBoy</option>
                </select>
                <label>Game</label>
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
                <label>Price</label>
                <input name='listing_price' placeholder='price here' type='text' onChange={handleChange}></input>
                <button>Submit</button>
            </form>
        </div>
    )
}
