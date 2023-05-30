import React from 'react';
import './style.css';
import profilePicture from '../../images/ProfilePhoto.jpeg';

export default function Header() {
    return (
        <div className="about-me">
            <h2>About</h2>
            {/* Add image here */}
            <img className="profile-image" src={profilePicture} alt="profile picture" />
            <p>Amman Nega graduated with a Bachelor's degree in Computer Science & Software Engineering from the University of Washington. He then went on to make use of the skills he gained at school, working as a Software Engineer at Tata Consultancy Services. During his time there, he worked to train an AI model to identify damages in insulators in the Southern California area.</p> 
            
            <p>Amman then went on to work in the Supply Chain field at GameStop, creating services used by warehouse staff to catalog items. Most recently, Amman has enrolled in a web development bootcamp so he could apply his knowledge working with back end technologies with front end.</p>
        </div>
    );
}
