import { React, useState } from 'react';
import './style.css';

export default function Contact() {
    const [message, setMessage] = useState('');

    const handleBlur = e => {
        if(e.target.value.trim() === '') {
            setMessage(e.target.name + " is required.");
        }
        else if(e.target.value.trim() !== '' && e.target.name === 'Email') {
            if(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(e.target.value.trim())) {
                setMessage("");
            }
            else {
                setMessage("Invalid email address.");
            }
        }
        else {
            setMessage("");
        }
    }

    return (
        <div className="main-section">
            <h2>Contact</h2>
            <form>
                <label>
                    Name:
                    <input name="Name" type="text" id="user-name" onBlur={handleBlur} />
                </label>
               
                <label>
                    Email:
                    <input name="Email" type="email" id="user-email" onBlur={handleBlur} />
                </label>
               
                <label>
                    Message:
                    <input name="Message" type="text" id="user-message" onBlur={handleBlur} />
                </label>
                {message === '' ? null : <h3>{message}</h3>}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
