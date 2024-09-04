import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; 
import './App.css';
function App() {
  const [roomId, setRoomId] = useState(''); 
  const createNewRoom = (e) => {
    e.preventDefault(); 
    const id = uuidv4(); 
    setRoomId(id);
  };
  return (
    <div className="app-container">
      <div className="form-container">
        <input
          type="text"
          placeholder="Your Name"
          className="input-field"
        />
        <input
          type="text"
          placeholder="Room ID"
          className="input-field"
          value={roomId} 
          readOnly
        />
        <div className="button-container">
          <button className="button" onClick={createNewRoom}>New Room</button>
          <button className="button">Join</button>
        </div>
      </div>
    </div>
  );
}

export default App;
