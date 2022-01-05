import React, { useState, useEffect } from 'react';

function CitySearch(){

    const [citySearch, setCitySearch] = useState("");

    return (
        <div className="weathr-search body-container">
            <input
                className=""
                value={citySearch}
                placeholder='Search city...'
                onChange={(e) => setCitySearch(e.target.value)}
            />
        </div>
    )
}

export default CitySearch;