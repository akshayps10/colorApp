import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [bgColor, setBgColor] = useState('red');

  const changeColor = (color) => {
    setBgColor(color);
  };

  return (
    <div className="app" style={{ backgroundColor: bgColor }}>
      <h1>Background Color Change</h1>
      <div className="button-container">
        <button onClick={() => changeColor('red')}>RED</button>
        <button onClick={() => changeColor('blue')}>BLUE</button>
        <button onClick={() => changeColor('green')}>GREEN</button>
        <button onClick={() => changeColor('purple')}>PURPLE</button>
      </div>
    </div>
  );
};

export default App; 