import React from 'react';

import { useNavigate } from 'react-router-dom';
import Pregnancy from './Pregnancy';
 import MenstrualPage from './Menstruals';
import './Mainpage.css'; // Make sure you have this CSS file

const Mainpage = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="main-page">
      <div className="header">
        <h1>services</h1>
      </div>
      <div className="services-section">
        {/* <h2></h2> */}
        <div className="services">
          <button className="service-circle" onClick={() => handleNavigate('/bike-ride')}>
            <img src={require('../assets/bike.png')} alt="Bike Ride" />
            <p>Bike Ride</p>
          </button>
          <button className="service-circle" onClick={() => handleNavigate('/food-delivery')}>
            <img src={require('../assets/food.png')} alt="Food Delivery" />
            <p>Pick and Drop</p>
          </button>
          <button className="service-circle" onClick={() => handleNavigate('/rooms')}>
            <img src={require('../assets/rooms.png')} alt="Rooms" />
            <p>Rooms</p>
          </button>
          <button className="service-circle" onClick={() => handleNavigate('/menstrual')}>
            <img src={require('../assets/menstrual.png')} alt="Menstruals" />
            <p>Menstruals</p>
          </button>
          { <button className="service-circle" onClick={() => handleNavigate('/pregnancy')}>
            <img src={require('../assets/pregnancy.png')} alt="Pregnancy" />
            <p>Pregnancy</p>
          </button> }
          <button className="service-circle" onClick={() => handleNavigate('/cyber-crime')}>
            <img src={require('../assets/cybercrime.png')} alt="Cyber Crime" />
            <p>Cyber Crime</p>
          </button>
          <button className="service-circle" onClick={() => handleNavigate('/pregnancy')}>
            <img src={require('../assets/mental.png')} alt="Mental Counselling" />
            <p>Mental Counselling</p>
          </button>
          <button className="service-circle" onClick={() => handleNavigate('/fitness')}>
            <img src={require('../assets/fitness.png')} alt="Fitness" />
            <p>Fitness</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
