import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Home/footer';
import '../Home/footer.css';
import './login.css';


function Login() {
    const navigate = useNavigate();
    
    // State hooks for form inputs
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        console.log("Username:", username);
        console.log("Password:", password);
        // Add logic for form validation, authentication, etc.
    };

    return (
        <div>
            <div className="l-form">
                <h1>Login</h1>

                <label className='l-input' htmlFor="username">Enter Username</label>
                <input
                    id="username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)}  // Update state on input change
                    required
                />

                <label className='l-input'htmlFor="password">Enter your Password</label>
                <input
                    id="password" 
                    type="password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}  // Update state on input change
                    required
                />

                <button type="submit" className='f-button' onClick={handleSubmit}>
                    Submit
                </button>
                <button className='c-button1' onClick={() => navigate('/')}>
                    Back Home
                </button>
                <button className='c-button2' onClick={() => navigate('/register')}>
                   New User
                </button>
            </div>
            <Footer/>
        </div>
    );
}

export default Login;
