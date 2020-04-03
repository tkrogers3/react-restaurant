import React from 'react';
import './App.css';
import Navbar from './Components/Navbar.js';
import Header from './Components/Header.js';
import InformationDeck from './Components/InfomationDeck.js';
import MenuSections from './Components/MenuSections.js';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <MenuSections />
      <InformationDeck />
    </div>
  );
}

export default App;
