
import React from "react";
import License from './Components/License';
import './App.css';

const image =require('./assets/hunter.jpg');

function App() {
  return (
   
    <div className="App">
      <License 
      image = {image}
      name = "Hunter S. Thompson"
      streetAddress = "1234 Kenai Ave"
      state= "CO"
      age ="40"
      />
      </div>


      
    
  
  );
}

export default App;
