import React from 'react';
import './App.css'; // Import the CSS file

function App() {
  return (
    <div className="app-container">
      <div className="form-container">
        <input type="text" placeholder="Your Name" className="input-field" />
        <input type="text" placeholder="Room ID" className="input-field" />
        <div className="button-container">
          <button className="button">New Room</button>
          <button className="button">Join</button>
        </div>
      </div>
    </div>
  );
}

export default App;
