import React, { useState, useEffect } from 'react';
import { TextField } from '@mui/material';
import { useLoadScript } from '@react-google-maps/api';
import { Link } from 'react-router-dom';
import bike from '../assets/bike.png';
import './BikeRide.css';

const libraries = ['places'];

const Map = () => {
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [userInfo, setUserInfo] = useState({ pickUp: '', destination: '', phone: '' });

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  useEffect(() => {
    if (!isLoaded) return;

    const autocompleteService = new window.google.maps.places.AutocompleteService();

    const fetchOptions = (input) => {
      if (input === '') {
        setOptions([]);
        return;
      }

      autocompleteService.getPlacePredictions({ input }, (predictions, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setOptions(predictions.map((prediction) => ({
            label: prediction.description,
            placeId: prediction.place_id,
          })));
        } else {
          setOptions([]);
        }
      });
    };

    fetchOptions(inputValue);
  }, [inputValue, isLoaded]);

  const handlePlaceSelect = (event, value) => {
    if (value) {
      console.log('Selected Place:', value);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    console.log('User Info:', userInfo);

    try {
      const response = await fetch('http://localhost:8080/api/bikes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
      });

      if (response.ok) {
        console.log('Booking confirmed');
      } else {
        console.error('Failed to book the ride:', response.statusText);
      }
    } catch (error) {
      console.error('Failed to fetch:', error);
    }
  };

  if (loadError) return <div>Error loading Google Maps API</div>;

  return (
    <div className="map-container">
      <h2 className="header">Book a Ride</h2>
      <div className="content-container">
        <div className="left-container">
          <div className="image-container">
            <img src={bike} alt="Bike" />
          </div>
          <form className="user-form-container">
            <TextField
              label="Pick up"
              name="pickUp"
              value={userInfo.pickUp}
              onChange={handleInputChange}
              sx={{ marginBottom: '10px', width: '100%' }}
            />
            <TextField
              label="Destination"
              name="destination"
              value={userInfo.destination}
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
            <Link to='/bookingconfirmed'>
              <button type="button" className="submit-button" onClick={handleSubmit}>
                Pick me
              </button>
            </Link>
          </form>
        </div>
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
  );
};

export default Map;
