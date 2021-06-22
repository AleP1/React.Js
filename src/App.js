
import './App.css';
import React, {components, useState} from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';


function App() {


  return (

    <div className="App">
      <header className="App-header">
        <NavBar />

        <div>
          <h1>Bik0</h1>
        </div>
        <ItemListContainer/>
      </header>
    </div>
  );
}

export default App;
