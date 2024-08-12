import React from 'react';
import './About.css';

import founder1 from '../assets/Founder1.jpg';
import founder2 from '../assets/Founder 2.jpg';
import founder3 from '../assets/Founder 3.jpg';
import founder4 from '../assets/Founder 4.jpg';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-header">    
          <h1>About Our Women Safety App</h1>
        </div>
        <div className="about-content">
          <p>
            Our Women Safety App is dedicated to providing a safe and secure environment for women. We aim to empower women by offering tools and resources that enhance their safety and well-being.
          </p>
          <h2>Features:</h2>
          <ul>
            <li>Emergency Alert: Instantly send your location to your emergency contacts.</li>
            <li>Location Tracking: Share your real-time location with trusted contacts.</li>
            <li>Community Support: Connect with local support groups and resources.</li>
            <li>Safety Tips: Access a wealth of safety tips and guidelines.</li>
          </ul>
          <h2>Our Mission:</h2>
          <p>
            We are committed to creating a world where women feel safe and empowered. Our app is designed to provide the tools necessary to prevent and respond to safety concerns effectively.
          </p>
          <h2>Founders:</h2>
          <div className="founders">
            <div className="founder">
              <img src={founder1} alt="Founder 1" className="founder-photo" />
              <h3>BARATH K</h3>
              <p>CEO & Co-Founder</p>
            </div>
            <div className="founder">
              { <img src={founder3} alt="Founder 3" className="founder-photo" /> }
              <h3>NATHISHA A</h3>
              <p>CEO & Co-Founder</p>
            </div>
            <div className="founder">
              <img src={founder2} alt="Founder 2" className="founder-photo" />
              <h3>THAANU SHIRI G</h3>
              <p>CEO & Co-Founder</p>
            </div>
            <div className="founder">
              <img src={founder4}  alt="Founder 4" className="founder-photo" />
              <h3>MUGIL B</h3>
              <p>CEO & Co-Founder</p>
            </div>

            {/* Add more founder profiles as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
