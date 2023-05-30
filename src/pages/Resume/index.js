import React from 'react';
import './style.css';
import resumeFile from '../../resume/Full-Stack-Resume.pdf';

export default function Resume() {

    return (
        <div className="main-section">
            <h2>Resume</h2>
            <div>
                <p>Download my {' '}
                    <a href={resumeFile} download>
                        Resume
                    </a>
                </p>

                <h3>Front-End Proficiencies</h3>
                <ul>
                    <li>JavaScript</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>CSS</li>
                    <li>React</li>
                </ul>

                <h3>Back-End Proficiencies</h3>
                <ul>
                    <li>Java</li>
                    <li>Kotlin</li>
                    <li>C++</li>
                    <li>C#</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                </ul>
            </div>
        </div>
    );
}
