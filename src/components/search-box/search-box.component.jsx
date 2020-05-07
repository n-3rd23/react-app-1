import React from 'react'
import './search-box.styles.css'

function SearchBox({handleChange}) {
    return (
        <div>
            <input className="search-box" type="search" onChange={handleChange} placeholder="search monsters"/>
        </div>
    )
}

export default SearchBox
