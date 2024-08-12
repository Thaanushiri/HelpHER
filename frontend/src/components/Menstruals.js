import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { format } from 'date-fns';
import './Menstruals.css';

const MenstrualPage = () => {
  const [lastPeriod, setLastPeriod] = useState('');
  const [cycleLength, setCycleLength] = useState(28);
  const [predictedPeriod, setPredictedPeriod] = useState('');

  const handleCalculate = () => {
    const nextPeriod = new Date(lastPeriod);
    nextPeriod.setDate(nextPeriod.getDate() + cycleLength);
    setPredictedPeriod(format(nextPeriod, 'MM/dd/yyyy'));
  };

  return (
    <div className="menstrual-page">
      <div className="content-wrapper">
        <Typography variant="h4" gutterBottom className="title">
          Menstrual Cycle Tracker
        </Typography>
        <Box className="form-container">
          <TextField
            label="Last Period Date"
            type="date"
            value={lastPeriod}
            onChange={(e) => setLastPeriod(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            className="form-field"
          />
          <TextField
            label="Cycle Length (days)"
            type="number"
            value={cycleLength}
            onChange={(e) => setCycleLength(e.target.value)}
            fullWidth
            className="form-field"
          />
          <Button variant="contained" color="primary" onClick={handleCalculate} className="calculate-button">
            Calculate Next Period
          </Button>
        </Box>
        {predictedPeriod && (
          <Typography variant="h6" className="result">
            Your next period is predicted to start on: {predictedPeriod}
          </Typography>
        )}
      </div>
    </div>
  );
};

export default MenstrualPage;
