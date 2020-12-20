import React from 'react';
import profileImage from './images/fabian.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Fabian Byrd</h1>
      <h2>Developer Portfolio</h2>
      <img src={profileImage} alt="profile-image"/>
    </div>
  );
}

export default App;
