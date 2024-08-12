import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [userInfo, setUserInfo] = useState({ name: '', email: '', password: '', confirmPassword: '', phone: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword, phone } = userInfo;

    if (!name || !email || !password || !confirmPassword || !phone) {
      setError('All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: name, email, password, phonenumber: phone }),
      });

      const data = await response.json();
      if (!data.success) {
        setError(data.message);
      } else {
        navigate('/welcome'); // Navigate to a welcome page or home page after successful signup
      }
    } catch (error) {
      setError('Signup failed. Please try again.');
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <Typography variant="h4" className="header">Signup</Typography>
        <form className="signup-form" onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            value={userInfo.name}
            onChange={handleInputChange}
            sx={{ marginBottom: '10px', width: '100%' }}
          />
          <TextField
            label="Email"
            name="email"
            value={userInfo.email}
            onChange={handleInputChange}
            sx={{ marginBottom: '10px', width: '100%' }}
          />
          <TextField
            label="Phone"
            name="phone"
            value={userInfo.phone}
            onChange={handleInputChange}
            sx={{ marginBottom: '20px', width: '100%' }}
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            value={userInfo.password}
            onChange={handleInputChange}
            sx={{ marginBottom: '10px', width: '100%' }}
          />
          <TextField
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={userInfo.confirmPassword}
            onChange={handleInputChange}
            sx={{ marginBottom: '20px', width: '100%' }}
          />
          {error && <Typography color="error" sx={{ marginBottom: '10px' }}>{error}</Typography>}
          <Button variant="contained" color="primary" type="submit" sx={{ width: '100%' }}>
            Signup
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
