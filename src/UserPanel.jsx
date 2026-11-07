import React, { useContext, useState } from 'react';
import { AuthContext } from './AuthContext'; 

function UserPanel() {
  const { userName, login, logout } = useContext(AuthContext);

  const [inputName, setInputName] = useState('');

  const handleLogin = () => {
    if (inputName.trim() !== '') {
      login(inputName);
      setInputName(''); 
    }
  };

  if (!userName) {
    return (
      <div>
        <input 
          type="text" 
          placeholder="Введите имя" 
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          style={{ padding: '5px', marginRight: '10px' }}
        />
        <button onClick={handleLogin} style={{ padding: '5px 10px', cursor: 'pointer' }}>
          Войти
        </button>
      </div>
    );
  }

  return (
    <div>
      <p style={{ margin: '0 0 10px 0' }}>Привет, <strong>{userName}</strong>!</p>
      <button onClick={logout} style={{ padding: '5px 10px', cursor: 'pointer' }}>
        Выйти
      </button>
    </div>
  );
}

export default UserPanel;