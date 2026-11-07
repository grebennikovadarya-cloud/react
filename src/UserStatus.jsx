import React from 'react';

function UserStatus({ isLoggedIn }) {
  
  return (
    <div style={{ marginTop: '20px' }}>
      {isLoggedIn ? (
        <h2 style={{ color: 'green' }}>Добро пожаловать, пользователь!</h2>
      ) : (
        <button style={{ padding: '8px 16px', cursor: 'pointer' }}>
          Войти
        </button>
      )}
    </div>
  );
}

export default UserStatus;