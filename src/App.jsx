import React from 'react';
import ButtonWithCallback from './ButtonWithCallback'; 

function App() {
  
  const handleClick = (message) => {
    console.log("Сообщение из дочернего компонента:", message);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h3>Домашнее задание: Передача callback через props</h3>
      
      <ButtonWithCallback onButtonClick={handleClick} />
    </div>
  );
}

export default App;