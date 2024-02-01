import React from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'

import data from '/src/cards_data.js'

const cards = data.map((card) => {
  return (
      <Card
          key={card.id} 
          {...card}
      />
  );
});
 
function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="card-container">
        {cards}
      </div>
    </div>
  )
}

export default App
