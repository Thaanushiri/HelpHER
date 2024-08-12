import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Ensure you have this CSS file

const Home = () => {
  return (
    <div className="home-page">
      <header className="home-header">
        <div className="header-content">
          <h1>Welcome!</h1>
          <p>Your Safety Partner!</p>
          <Link to="/Login" className="cta-button">Join Us</Link>
        </div>
      </header>
      
      <footer className="home-footer">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
        <Link to="/contact" className="footer-link">Contact Us</Link>
      </footer>
    </div>
  );
};

export default Home;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../App.css'; // Ensure you have this CSS file

// const Home = () => {
//   return (
//     <section id="home" className="home-page">
//       <header className="home-header">
//         <div className="header-content">
//           <h1>Welcome!</h1>
//           <p>Your Safety Partner!</p>
//           <Link to="#about" className="cta-button">Learn More</Link>
//         </div>
//       </header>
//     </section>
//   );
// };

// const About = () => {
//   return (
//     <section id="about" className="about-page">
//       <div className="about-container">
//         <div className="about-header">
//           <h1>About Our Women Safety App</h1>
//         </div>
//         <div className="about-content">
//           <p>
//             Our Women Safety App is dedicated to providing a safe and secure environment for women. We aim to empower women by offering tools and resources that enhance their safety and well-being.
//           </p>
//           <h2>Features:</h2>
//           <ul>
//             <li>Emergency Alert: Instantly send your location to your emergency contacts.</li>
//             <li>Location Tracking: Share your real-time location with trusted contacts.</li>
//             <li>Community Support: Connect with local support groups and resources.</li>
//             <li>Safety Tips: Access a wealth of safety tips and guidelines.</li>
//           </ul>
//           <h2>Our Mission:</h2>
//           <p>
//             We are committed to creating a world where women feel safe and empowered. Our app is designed to provide the tools necessary to prevent and respond to safety concerns effectively.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// const App = () => {
//   return (
//     <div>
//       <Home />
//       <About />
//     </div>
//   );
// };

// export default App;

