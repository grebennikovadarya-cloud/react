import React, { useReducer } from 'react';
import UserItem from './UserItem';

const initialState = [
  { id: 1, name: 'Иван', active: true },
  { id: 2, name: 'Мария', active: false },
  { id: 3, name: 'Алексей', active: true },
];

function usersReducer(state, action) {
  switch (action.type) {
    case 'EDIT_NAME':
      return state.map(user => 
        user.id === action.payload.id 
          ? { ...user, name: action.payload.newName } 
          : user
      );

    case 'TOGGLE_ACTIVE':
      return state.map(user => 
        user.id === action.payload 
          ? { ...user, active: !user.active } 
          : user
      );

    case 'DELETE_USER':
      return state.filter(user => user.id !== action.payload);

    default:
      return state;
  }
}

function App() {
  const [users, dispatch] = useReducer(usersReducer, initialState);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '800px' }}>
      <h2>Список пользователей (useReducer)</h2>
      
      <div style={{ marginTop: '20px' }}>
        {users.map(user => (
          <UserItem 
            key={user.id} 
            user={user} 
            dispatch={dispatch} 
          />
        ))}
        
        {users.length === 0 && <p>Список пуст.</p>}
      </div>
    </div>
  );
}

export default App;