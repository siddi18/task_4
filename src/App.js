import React, { useState } from 'react';
import './App.css';
import Button from './components/Button.jsx';
import Display from './components/Display.jsx';

const App = () => {
  const [input, setInput] = useState('');
  
  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleEqual = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="app">
    <header className="welcome-message">
      <h1>Welcome to the BrainyBeam <span role="img" aria-label="hi">👋</span></h1>
    </header>
    <div className="calculator">
      <Display value={input} />
      <div className="button-grid">
        <Button onClick={handleClick} value="7" />
        <Button onClick={handleClick} value="8" />
        <Button onClick={handleClick} value="9" />
        <Button onClick={handleClear} value="C" />

        <Button onClick={handleClick} value="4" />
        <Button onClick={handleClick} value="5" />
        <Button onClick={handleClick} value="6" />
        <Button onClick={handleClick} value="*" />

        <Button onClick={handleClick} value="1" />
        <Button onClick={handleClick} value="2" />
        <Button onClick={handleClick} value="3" />
        <Button onClick={handleClick} value="-" />

        <Button onClick={handleClick} value="0" />
        <Button onClick={handleClick} value="/" />
        <Button onClick={handleEqual} value="=" />
        <Button onClick={handleClick} value="+" />
      </div>
    </div>
    </div>
  );
};

export default App;
