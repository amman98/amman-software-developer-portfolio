import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import './style.css';

export default function Navigation(props) {
    const location = useLocation();

    return (
        <nav className='nav'>
            <Link to='/' className={`nav-link ${location.pathname === '/' ? 'active' : 'inactive'}`}>About Me</Link>
            <Link to='/portfolio' className={`nav-link ${location.pathname === '/portfolio' ? 'active' : 'inactive'}`}>Portfolio</Link>
            <Link to='/contact' className={`nav-link ${location.pathname === '/contact' ? 'active' : 'inactive'}`}>Contact</Link>
            <Link to='/resume' className={`nav-link ${location.pathname === '/resume' ? 'active' : 'inactive'}`}>Resume</Link>  
        </nav>
    );
}
