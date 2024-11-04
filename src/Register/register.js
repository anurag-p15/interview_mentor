import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css';
import Footer from '../Home/footer';
import '../Home/footer.css';

function Form() {
    const navigate = useNavigate();

    // Form state
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        gender: '',
        password: '',
        confirmPassword: '',
        yearOfGraduation: '',
        graduationStream: '',
        dob: '',
        about: ''
    });

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your submission logic here
        console.log(formData);
    };

    return (
        <div className="register-container">
            
            <form className="r-form" onSubmit={handleSubmit}>
            <h1>
                Register Yourself here !!</h1><div className="form-left">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange}
                        required 
                    />

                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        value={formData.username} 
                        onChange={handleChange}
                        required 
                    />

                    <label htmlFor="email">Email-id</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange}
                        required 
                    />

                    <label htmlFor="gender">Gender</label>
                    <input 
                        type="text" 
                        id="gender" 
                        name="gender" 
                        value={formData.gender} 
                        onChange={handleChange}
                        required 
                    />

                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        value={formData.password} 
                        onChange={handleChange}
                        required 
                    />
                </div>

                <div className="form-right">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input 
                        type="password" 
                        id="confirmPassword" 
                        name="confirmPassword" 
                        value={formData.confirmPassword} 
                        onChange={handleChange}
                        required 
                    />

                    <label htmlFor="yearOfGraduation">Year of Graduation</label>
                    <input 
                        type="text" 
                        id="yearOfGraduation" 
                        name="yearOfGraduation" 
                        value={formData.yearOfGraduation} 
                        onChange={handleChange}
                        required 
                    />

                    <label htmlFor="graduationStream">Graduation Stream</label>
                    <input 
                        type="text" 
                        id="graduationStream" 
                        name="graduationStream" 
                        value={formData.graduationStream} 
                        onChange={handleChange}
                        required 
                    />

                    <label htmlFor="dob">Date of Birth (DD/MM/YYYY)</label>
                    <input 
                        type="date" 
                        id="dob" 
                        name="dob" 
                        value={formData.dob} 
                        onChange={handleChange}
                        required 
                    />

                    <label htmlFor="about">About yourself</label>
                    <textarea 
                        id="about" 
                        name="about" 
                        value={formData.about} 
                        onChange={handleChange} 
                        required 
                    />
                </div>

                <div className="button-group">
                <button type="button" className="home-button" onClick={() => navigate('/')}>Home</button>
                    <button type="submit" className="register-button">Register</button>
                    <button type="button" className="existing-user-button" onClick={() => navigate('/login')}>Existing User</button>
                </div>
            </form>
        <Footer/>
        </div>
    );
}

export default Form;