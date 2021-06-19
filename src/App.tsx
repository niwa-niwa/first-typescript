import React from 'react';
import './App.css';
import TestComponent from './TestComponent';


const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TestComponent text="Lesson Type Script." />
      </header>
    </div>
  );
}

export default App;
