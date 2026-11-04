import React from 'react';
import './App.css'; 

function App() {
  const name = 'Dasha';
  const profession = 'Frontend-разработчик';

  return (
    <div className="card-container">

      <h1 style={{ color: '#2c3e50' }}>Привет, {name}!</h1>
      
      <h2>{profession}</h2>
      
      <p>
        Я изучаю React и создаю свои первые интерфейсы. 
        Мне нравится превращать дизайн в живой код, 
        делать сайты удобными и красивыми.
      </p>
      
      <div className="quote">
        "67" 🚀💻
      </div>

    </div>
  );
}

export default App;