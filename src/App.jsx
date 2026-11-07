import React from 'react';
import UserCard from './UserCard'; 

function App() {
  const usersData = [
    { id: 1, name: "Анна", age: 25, email: "anna@example.com" },
    { id: 2, name: "Иван", age: 30, email: "ivan@example.com" },
    { id: 3, name: "Мария", age: 28, email: "maria@example.com" }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Список пользователей</h2>
      
      <div>

        {usersData.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;