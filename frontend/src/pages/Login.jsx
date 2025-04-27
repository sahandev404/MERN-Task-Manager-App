import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { URL } from '../App';
import LoginForm from '../components/LoginForm';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.post(`${URL}/api/users/login`, { email, password });
            localStorage.setItem('token', response.data.token);
            navigate('/dashboard');
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed');
        }
    };

    return (
        <div className="app">
        <div className="login-container">
            <h2 className="--flex-center">Login</h2>
            <LoginForm
                email={email}
                password={password}
                setEmail={setEmail}
                setPassword={setPassword}
                error={error}
                handleSubmit={handleSubmit}
            />
            <hr />
            <p className="--flex-center">Don't have an account? <a href="/register"><b>&nbsp; Register here</b></a></p>
        </div>
        </div>
    );
};

export default Login;