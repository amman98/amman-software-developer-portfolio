import React from 'react';
import github from '../../images/github-logo.svg';
import linkedin from '../../images/linked-in-logo.svg';
import twitter from '../../images/twitter-logo.svg';
import './style.css';

export default function Resume() {

    return (
        <div className="footer">
            <a target="_blank" href="https://github.com/amman98">
                <img className='footer-icon' src={github} alt="GitHub profile" />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/amman-nega/">
                <img className='footer-icon' src={linkedin} alt="LinkedIn profile" />
            </a>
            <a target="_blank" href="https://twitter.com/JCailton">
                <img className='footer-icon' src={twitter} alt="twitter profile" />
            </a>
        </div>
    );
}
