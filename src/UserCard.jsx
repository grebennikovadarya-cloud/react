import React from 'react';

function UserCard({ user }) {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '15px', marginBottom: '15px', width: '300px', fontFamily: 'sans-serif' }}>
      <h3 style={{ margin: '0 0 10px 0' }}>{user.name}</h3>
      <p style={{ margin: '5px 0' }}>Возраст: {user.age}</p>
      <p style={{ margin: '5px 0' }}>Email: {user.email}</p>
    </div>
  );
}

export default UserCard;