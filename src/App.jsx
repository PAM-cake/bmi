import React, { useState, useMemo } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState(70);  // Default value 70kg
  const [height, setHeight] = useState(170); // Default value 170cm

  // Memoized BMI calculation for optimization
  const bmi = useMemo(() => {
    if (weight && height) {
      const heightInMeters = height / 100;
      return (weight / (heightInMeters * heightInMeters)).toFixed(2);
    }
    return null;
  }, [weight, height]);

  // Memoized category determination based on BMI
  const category = useMemo(() => {
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return 'Normal weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
      return 'Overweight';
    } else {
      return 'Obesity';
    }
  }, [bmi]);

  return (
    <div className="app-container">
      <h1>BMI Calculator</h1>

      <div className="bmi-form">
        <label>Weight (kg)</label>
        <input
          type="range"
          min="30"
          max="150"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <output className="slider-value">{weight} kg</output>

        <label>Height (cm)</label>
        <input
          type="range"
          min="100"
          max="220"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <output className="slider-value">{height} cm</output>

      </div>

      {bmi && (
        <div className="bmi-result">
          Your BMI is: {bmi}
          <div className="bmi-category">{category}</div>
        </div>
      )}
    </div>
  );
}

export default App;
