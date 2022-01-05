import React, { useState, useEffect } from 'react';
import { MagnifyingGlass } from 'phosphor-react';
import { useNavigate } from 'react-router';

function CitySearch(){

    const [citySearch, setCitySearch] = useState("");
    let navigate = useNavigate();
    
    return (
        <div className="weathr-search-navbar">
            <div className='search-icon'>
                <MagnifyingGlass size={20} />
            </div>
            <input
                className="search-input"
                value={citySearch}
                placeholder='Search city...'
                onChange={(e) => setCitySearch(e.target.value)}
                onKeyPress={(e) => {
                    if(e.key == "Enter"){
                        navigate("/weather?city=" + e.target.value)
                    }
                }}
            />
        </div>
    )
}

export default CitySearch;