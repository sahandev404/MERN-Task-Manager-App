import React, { useState } from 'react';
import RegisterForm from '../components/RegisterForm';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.password) {
            alert('All fields are required!');
            return;
        }
        console.log('Form submitted:', formData);
    };

    return (
        <div className="app">
        <div className="login-container">
            <h2 className="--flex-center">Register</h2>
            <RegisterForm
                email={formData.email}
                password={formData.password}
                setEmail={(email) => setFormData({ ...formData, email })}
                setPassword={(password) => setFormData({ ...formData, password })}
                error={null}
                handleSubmit={handleSubmit}
            />
            <hr />
            <p className="--flex-center">Already have an account? <a href="/login"><b>&nbsp; Login here</b></a></p>
        </div>
        </div>
    );
};

export default Register;