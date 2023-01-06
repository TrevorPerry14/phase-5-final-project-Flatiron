import React from 'react'

export default function SearchGameFilter({ gameSearch, setGameSearch }) {

    function handleChange(e) {
        setGameSearch(e.target.value)
    }

    return (
        <div>
            <div>
                <input
                type='text'
                placeholder='Search Games'
                value={gameSearch}
                onChange={handleChange}
                className='w-5/6 p-2'
                />
            </div>
        </div>
    )
}
