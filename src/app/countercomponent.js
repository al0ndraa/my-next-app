"use client"
import { useState } from 'react';
export default function Counter({ initialCount = 0, initialStep = 1 }) {
  const [count, setCount] = useState(initialCount);
  const [step, setStep] = useState(initialStep);
  const handleIncrement = () => setCount(prev => prev + step);
  const handleDecrement = () => {
    if (count - step >= 0) {
      setCount(prev => prev - step);
    }
  };
  const handleReset = () => setCount(initialCount);
  const handleChangeStep = (e) => {
    const newStep = Number(e.target.value);
    if (!isNaN(newStep) && newStep > 0) {
      setStep(newStep);
    }
  };
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '20px',
      borderRadius: '8px',
      width: '220px',
      textAlign: 'center',
      backgroundColor: '#f9f9f9'
    }}>
      <div aria-live="polite" style={{ marginBottom: '10px' }}>
        <h3>Count: {count}</h3>
      </div>
      <button aria-label="Increment" onClick={handleIncrement} style={{ margin: '5px' }}>+1</button>
      <button
        aria-label="Decrement"
        onClick={handleDecrement}
        style={{ margin: '5px' }}
        disabled={count - step < 0}
      >
        -1
      </button>
      <button aria-label="Reset" onClick={handleReset} style={{ margin: '5px' }}>Reset</button>
      <div style={{ marginTop: '10px' }}>
        <label htmlFor="stepInput">Step: </label>
        <input
          id="stepInput"
          type="number"
          min="1"
          value={step}
          onChange={handleChangeStep}
          style={{ width: '60px', marginLeft: '5px' }}
        />
      </div>
    </div>
  );
}