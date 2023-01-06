import React, { useState } from 'react'

export default function SearchConsoleFilter({ consoleSearch, setConsoleSearch}) {
    // const [filterAttributes, setFilterAttributes] = useState({
    //     name: ''
    // })

    function handleChange(e) {
        setConsoleSearch(e.target.value)
    };

    // function handleSubmit(e) {
    //     e.preventDefault();

    // }
    return (
        <div>
            <div>
                <input
                type='text'
                placeholder='Search Consoles'
                value={consoleSearch}
                onChange={handleChange}
                className='w-5/6 p-2'
                />
            </div>
        </div>
    )
}
