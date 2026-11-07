import React, { useState } from 'react';
import UserStatus from './UserStatus'; 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h3>Домашнее задание: Условный рендеринг</h3>
      
      <button 
        onClick={toggleLogin}
        style={{ padding: '8px 16px', cursor: 'pointer', marginBottom: '20px', backgroundColor: '#e0e0e0', border: '1px solid #999' }}
      >
        Переключить статус (Войти / Выйти)
      </button>

      <UserStatus isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App;