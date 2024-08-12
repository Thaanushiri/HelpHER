import React, { useState } from 'react';
import axios from 'axios';
import { TextField, TextareaAutosize, Button } from '@mui/material';
import './CyberCrimeReport.css';
import cyber from '../assets/cybercrime.png';

const CyberCrimeReport = () => {
  const [reportInfo, setReportInfo] = useState({
    name: '',
    email: '',
    phone: '',  
    incidentDetails: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReportInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      console.alert('Submitting report:', reportInfo); // Log payload
      const response = await axios.post('http://localhost:8080/api/cybercrimes', reportInfo);
      console.log('Report submitted:', response.data);
    } catch (error) {
      console.error('There was an error submitting the report:', error);
    }
  };

  return (
    <div className='cyber-page'>
      <div className="cyber-crime-report-container">
        <div className="content-container">
          <h2 className="header">Report Cyber Crime</h2>

          <TextField
            label="Name"
            name="name"
            value={reportInfo.name}
            onChange={handleInputChange}
            sx={{ marginBottom: '10px', width: '100%' }}
          />
          <TextField
            label="Email"
            name="email"
            value={reportInfo.email}
            onChange={handleInputChange}
            sx={{ marginBottom: '10px', width: '100%' }}
          />
          <TextField
            label="Phone"
            name="phone"
            value={reportInfo.phone}
            onChange={handleInputChange}
            sx={{ marginBottom: '10px', width: '100%' }}
          />
          <TextareaAutosize
            minRows={4}
            placeholder="Describe the incident"
            name="incidentDetails"
            value={reportInfo.incidentDetails}
            onChange={handleInputChange}
            style={{ marginBottom: '10px', width: '100%' }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{ width: '100%' }}
            type='submit'
          >
            Submit Report
          </Button>
          <div className="resources-container">
            <h3>Helpful Resources</h3>
            <ul>
              <li><a href="https://www.cybercrime.gov.in" target="_blank" rel="noopener noreferrer">Cyber Crime Reporting Portal</a></li>
              <li><a href="https://www.womensafety.gov.in" target="_blank" rel="noopener noreferrer">Women's Safety Portal</a></li>
              <li><a href="https://www.stopbullying.gov" target="_blank" rel="noopener noreferrer">Stop Bullying</a></li>
              <li><a href="https://www.cyberaware.gov.uk" target="_blank" rel="noopener noreferrer">Cyber Aware</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberCrimeReport;
