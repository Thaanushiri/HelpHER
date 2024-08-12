import React, { useState } from 'react';
import { TextField, MenuItem, Button, Typography } from '@mui/material';
import './Fitness.css';

const fitnessTips = {
  underweight: [
    "Eat more frequently: Include snacks between meals.",
    "Choose nutrient-rich foods: Focus on whole grains, fruits, vegetables, lean protein, and dairy.",
    "Strength training: Build muscle with resistance exercises.",
    "Smoothies and shakes: Drink high-calorie, nutrient-dense beverages.",
  ],
  healthyWeight: [
    "Maintain a balanced diet: Include a variety of foods from all food groups.",
    "Regular exercise: Aim for at least 150 minutes of moderate aerobic activity or 75 minutes of vigorous activity per week.",
    "Strength training: Include exercises that target all major muscle groups at least twice a week.",
    "Stay hydrated: Drink plenty of water throughout the day.",
  ],
  overweight: [
    "Focus on portion control: Be mindful of serving sizes.",
    "Increase physical activity: Aim for 300 minutes of moderate aerobic activity per week.",
    "Incorporate strength training: Build muscle to boost metabolism.",
    "Choose healthier snacks: Opt for fruits, vegetables, and whole grains.",
  ],
  obese: [
    "Consult a healthcare provider: Get personalized advice and support.",
    "Start slow: Gradually increase physical activity.",
    "Healthy eating habits: Focus on whole, unprocessed foods.",
    "Set realistic goals: Aim for a sustainable weight loss of 1-2 pounds per week.",
  ],
};

const FitnessTips = () => {
  const [bodyCondition, setBodyCondition] = useState('');
  const [tips, setTips] = useState([]);

  const handleSelectChange = (e) => {
    setBodyCondition(e.target.value);
    setTips(fitnessTips[e.target.value]);
  };

  return (
    <div className='fitness-page'>
    <div className="fitness-tips-container">
      <h2 className="header">Fitness Tips for Women</h2>
      <TextField
        select
        label="Select Your Body Condition"
        value={bodyCondition}
        onChange={handleSelectChange}
        sx={{ marginBottom: '20px', width: '100%' }}
      >
        <MenuItem value="underweight">Underweight</MenuItem>
        <MenuItem value="healthyWeight">Healthy Weight</MenuItem>
        <MenuItem value="overweight">Overweight</MenuItem>
        <MenuItem value="obese">Obese</MenuItem>
      </TextField>
      {tips.length > 0 && (
        <div className="tips-container">
          <Typography variant="h6" gutterBottom>
            Tips for {bodyCondition.charAt(0).toUpperCase() + bodyCondition.slice(1)}
          </Typography>
          <ul>
            {tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </div>
  );
};

export default FitnessTips;