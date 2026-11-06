import React, { useState } from 'react';
import UserCard from './UserCard'; 

function App() {
  const [age, setAge] = useState(29);
  const [cardColor, setCardColor] = useState('lightgreen');

  const handleAgeChange = () => {
    setAge(age + 1);
  };

  const handleColorChange = () => {
    setCardColor(cardColor === 'lightgreen' ? 'lightblue' : 'lightgreen');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Домашнее задание: Props и рендеринг</h2>
      
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={handleAgeChange} style={{ padding: '8px 16px', cursor: 'pointer' }}>
          Изменить возраст
        </button>
        <button onClick={handleColorChange} style={{ padding: '8px 16px', cursor: 'pointer' }}>
          Изменить цвет карточки
        </button>
      </div>

      <UserCard 
        name="Иван Петров" 
        age={age} 
        color={cardColor} 
      />
    </div>
  );
}

export default App;