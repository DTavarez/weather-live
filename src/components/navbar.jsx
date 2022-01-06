import React, { useState, useEffect } from 'react';
import CitySearch from './filterSearch_navbar';
import { List } from 'phosphor-react';
import { useNavigate } from 'react-router';

function NavBar(){

    const [isListOpen, setIsListOpen] = useState(false);
    let navigate = useNavigate();

    return (
        <div>
            <nav className="weathr-nav body-container shadow">
                <div className='nav-header'>
                    <div className="title" onClick={()=>navigate("/")}>
                        <span>Weather live</span>
                    </div>
                    <div className="list-icon" onClick={() => setIsListOpen(!isListOpen)}>
                        <List size={32}></List>
                    </div>
                    <div className="desktop-menu">
                        <CitySearch></CitySearch>       
                        <a className="toogle-theme"><span>Dark Theme</span></a>
                    </div>
                </div>
                {isListOpen &&
                    <div className='mobile-menu'>
                        <ul>
                            <li>
                                <CitySearch></CitySearch>
                            </li>
                            <li>
                                <a className="toogle-theme"><span>Dark Theme</span></a>
                            </li>
                        </ul>
                    </div>
                }
            </nav>
        </div>
    )
}

export default NavBar;