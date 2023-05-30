import React from 'react';
import Project from '../../components/Project';
import biteBuddies from '../../images/Bite-Buddies.jpeg';
import './style.css';

export default function Portfolio() {
    return (
        <div className="main-section">
            <h2>Portfolio</h2>
            <div className='projects'>
                <Project card={biteBuddies} name={"Bite Buddies"} deploy={"https://bite-buddies.herokuapp.com/"} repo={"https://github.com/bear-muna/bite-buddies"} />
            </div>
        </div>
    );
}
