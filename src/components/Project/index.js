import React from 'react';
import github from '../../images/github-logo.svg';
import './style.css';

export default function Project(props) {
    return (
        <div className={`project ${props.identifier}`}>
            <img title="Bite Buddies" src={props.card} alt="project" />
            <div className='image-text'>
                <a className='deploy-link' target="_blank" href={props.deploy}>{props.name}</a>
                <a className='repo-link' target="_blank" href={props.repo}>
                    <img className='github-logo' src={github} alt="github repo" />
                </a>
            </div>
        </div>
    );
}
