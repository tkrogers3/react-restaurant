import React from 'react';
import './App.css';
import Navbar from './Components/Navbar.js';
import Header from './Components/Header.js';
import InformationDeck from './Components/InfomationDeck.js';
import Menu  from './Components/Menu.js';
import MenuItems from './Components/MenuItems';


function App() {
  return (
    <div className="App">
      <Navbar />
       <Header />
       <MenuItems />
       <Menu />
    <InformationDeck />


     </div>
  );
}

export default App;
