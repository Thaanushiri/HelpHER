// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Login.css';
// import logo from '../assets/logo.png'; // Path to your logo

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {  
//       const response = await fetch('http://localhost:8080/login/check', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();
//       if (!data.success) {
//         setError(data.message);
//       } else {
//         localStorage.setItem('role', data.role); // Store user role or other necessary info
//         navigate('/main'); // Navigate to the main page after login
//       }
//     } catch (error) {
//       setError('Login failed. Please try again.');
//     }
//   };

//   return (
//     <div className="login-page">
//       <div className="login-container">
//         <div className="login-header"> 
//           {/* <img src={logo} alt="Logo" className="login-logo" /> Added logo */}
//           <h2>LOG IN</h2>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className="login-form-group">
//             <label htmlFor="email" className="login-form-label">Username:</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="login-form-input"
//             />
//           </div>
//           <div className="login-form-group">
//             <label htmlFor="password" className="login-form-label">Password:</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="login-form-input"
//             />
//           </div>
//           <Link to="/forgot-password" className="login-forgot-password">Forgot your password?</Link>
//           {error && <p className="error-message">{error}</p>}
//           <button type="submit" className="login-submit-button">LOGIN</button>
//         </form>
//         <div className="login-signup-link">
//           <p className='dont'>   Don't have an account?</p>
//           <Link to="/signup">Sign Up</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import logo from '../assets/logo.png'; // Path to your logo

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/login/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!data.success) {
        setError(data.message);
      } else {
        localStorage.setItem('role', data.role); // Store user role or other necessary info
        if (data.role === 'admin') {
          navigate('/admin'); // Navigate to the admin page if the role is admin
        } else {
          navigate('/main'); // Navigate to the main page for regular users
        }
      }
    } catch (error) {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          {/* <img src={logo} alt="Logo" className="login-logo" /> Added logo */}
          <h2>LOG IN</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="login-form-group">
            <label htmlFor="email" className="login-form-label">Username:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="login-form-input"
            />
          </div>
          <div className="login-form-group">
            <label htmlFor="password" className="login-form-label">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="login-form-input"
            />
          </div>
          <Link to="/forgot-password" className="login-forgot-password">Forgot your password?</Link>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="login-submit-button">LOGIN</button>
        </form>
        <div className="login-signup-link">
          <p className='dont'>Don't have an account?</p>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
