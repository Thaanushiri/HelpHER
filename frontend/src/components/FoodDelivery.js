import React, { useState, useEffect } from 'react';
import { TextField, Autocomplete } from '@mui/material';
import { useLoadScript } from '@react-google-maps/api';
import axios from 'axios'; // Import axios
import './FoodDeivery.css';
import food from '../assets/food.png';

const libraries = ['places'];

const FoodDelivery = () => {
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [userInfo, setUserInfo] = useState({ name: '', email: '', phone: '', deliveryAddress: '' });

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
    try {
      console.log('Submitting user info:', userInfo); // Log user info
      const response = await axios.post('http://localhost:8080/api/pick-and-drop', userInfo);
      console.log('User info submitted:', response.data);
    } catch (error) {
      console.error('There was an error submitting the user info:', error);
    }
  };

  if (loadError) return <div>Error loading Google Maps API</div>;

  return (
    <div className="food-delivery-container">
      <div className="content-container">
        <div className="left-container">
          <h2 className="header">Pick and Drop</h2> 
          <div className="image-container">
            <img src={food} alt="Food" />
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
              label="Delivery Address"
              name="deliveryAddress"
              value={userInfo.deliveryAddress}
              onChange={handleInputChange}
              sx={{ marginBottom: '10px', width: '100%' }}
            />
            <button type="button" className="submit-button" onClick={handleSubmit}>
              Pick and Drop
            </button>
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

export default FoodDelivery;
