import React from 'react';

function ButtonWithCallback({ onButtonClick }) {
  
  const handleClick = () => {
    onButtonClick("Кнопка была нажата!");
  };

  return (
    <button 
      onClick={handleClick}
      style={{ padding: '8px 16px', cursor: 'pointer' }}
    >
      Нажми меня
    </button>
  );
}

export default ButtonWithCallback;