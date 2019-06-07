import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LeafletMap from "./Components/LeafletMap";
import Settings from "./Components/Settings";

const App: React.FC = () => {
  return (
    <div className="App">
      <LeafletMap/>
      <Settings/>
    </div>
  );
}

export default App;
