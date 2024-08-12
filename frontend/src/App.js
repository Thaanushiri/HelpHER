import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'; // Import the Home component
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar'; // Import the Navbar component
import About from './components/About'; // Import the About component
import Mainpage from './components/Mainpage';
import BikeRide from './components/BikeRide';
import Menstruals from './components/Menstruals';
import Mentalcounselling from './components/Mentalcounselling';
import FoodDelivery from './components/FoodDelivery';
import Rooms from './components/Rooms';
import Fitness from './components/Fitness';
import Cybercrime from './components/Cybercrime';
import Pregnancy from './components/Pregnancy';
import AdminDashboard from './components/AdminDashboard';
import ServiceDetails from './components/ServiceDetails';
import Contact from './components/Contact';
import Emergency from './components/Emergency';
import BookingConfirmed from './components/BookingConfirmed';
// import RoomConfirm from './components/RoomConfirm';





function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Mainpage />} />
          <Route path="/main" element={<Mainpage />} /> 
          <Route path="/bike-ride" element={<BikeRide />} />
          <Route path="/food-delivery" element={<FoodDelivery />} />
          <Route path="/menstrual" element={<Menstruals />} />
          <Route path="/mental" element={<Mentalcounselling />} />
          <Route path="/fitness" element={<Fitness />} />
          <Route path="/cyber-crime" element={<Cybercrime />} />
          <Route path="/pregnancy" element={<Pregnancy />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/bookingconfirmed" element={<BookingConfirmed />} />
          
         
          
        <Route path="/admin/:serviceName" element={<ServiceDetails />} />

          {/* Add route for Mainpage */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
