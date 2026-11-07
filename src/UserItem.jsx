import React, { useState } from 'react';

function UserItem({ user, dispatch }) {
  const [inputValue, setInputValue] = useState(user.name);

  const handleSave = () => {
    dispatch({
      type: 'EDIT_NAME',
      payload: { id: user.id, newName: inputValue }
    });
  };

  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '15px',
      marginBottom: '10px',
      borderRadius: '8px',
      backgroundColor: user.active ? '#e8f5e9' : '#f5f5f5',
      color: user.active ? '#2e7d32' : '#757575',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }}>
      <strong style={{ width: '80px' }}>ID: {user.id}</strong>
      
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)}
        style={{ padding: '5px', flexGrow: 1 }}
      />
      
      <button onClick={handleSave} style={{ padding: '5px 10px', cursor: 'pointer' }}>
        Сохранить
      </button>

      <button 
        onClick={() => dispatch({ type: 'TOGGLE_ACTIVE', payload: user.id })}
        style={{ padding: '5px 10px', cursor: 'pointer' }}
      >
        {user.active ? 'Сделать неактивным' : 'Сделать активным'}
      </button>

      <button 
        onClick={() => dispatch({ type: 'DELETE_USER', payload: user.id })}
        style={{ padding: '5px 10px', cursor: 'pointer', color: 'red' }}
      >
        Удалить
      </button>
    </div>
  );
}

export default UserItem;