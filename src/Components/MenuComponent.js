import React from 'react';
import { Link } from "react-router-dom";

export default function MenuComponent() {
    return (
        <ul className='menu'>
            <li className='menu-item'><Link to='/flats'>FLATS</Link></li>
            <li className='menu-item'><Link to='/profile'>PROFILE</Link></li>
            <li className='menu-item'><Link to='/'>HOME</Link></li>
        </ul>
    )
}