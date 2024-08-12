import React, { useState } from 'react';
import axios from 'axios';  // Import Axios
import { TextField } from '@mui/material';
import room from '../assets/rooms.png';
import './RoomBooking.css';

const RoomBooking = () => {
  const [userInfo, setUserInfo] = useState({ name: '', email: '', phone: '', checkIn: '', checkOut: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      // Log user info for debugging
      console.log('User Info:', userInfo);

      // Send a POST request to the backend
      const response = await axios.post('http://localhost:8080/api/room-bookings', userInfo);

      // Log the response for debugging
      console.log('Response:', response.data);

      // You can handle success feedback here
      alert('Room booked successfully!');
    } catch (error) {
      // Log the error for debugging
      console.error('Error booking room:', error);

      // You can handle error feedback here
      alert('There was an error booking the room. Please try again.');
    }
  };

  return (
    <div className="room-booking-container">
      <div className="content-container">
        <div className="left-container">
          <h2 className="header">Book a Room</h2>

          <div className="image-container">
            <img src={room} alt="Room" />
          </div>
          <form className="user-form-container">
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
              sx={{ marginBottom: '10px', width: '100%' }}
            />
            <TextField
              label="Check-In Date"
              name="checkIn"
              type="date"
              value={userInfo.checkIn}
              onChange={handleInputChange}
              sx={{ marginBottom: '10px', width: '100%' }}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Check-Out Date"
              name="checkOut"
              type="date"
              value={userInfo.checkOut}
              onChange={handleInputChange}
              sx={{ marginBottom: '10px', width: '100%' }}
              InputLabelProps={{ shrink: true }}
            />
            <button type="button" className="submit-button" onClick={handleSubmit}>
              Book Now
            </button>
          </form>
        </div>
        <div className="right-container">
          <div className="map-iframe-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.472888122254!2d76.92319257408951!3d10.927606756388924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85b823c4ca3d5%3A0x23416a992879b7c4!2sSri%20Krishna%20College%20Of%20Technology!5e0!3m2!1sen!2sin!4v1721919285291!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomBooking;
