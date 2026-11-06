import React from 'react';

function UserCard({ name, age, color }) {
  console.log("Рендер UserCard");

  const cardStyle = {
    backgroundColor: color,
    padding: '20px',
    borderRadius: '8px',
    border: '1px solid #999',
    width: '250px',
    marginTop: '20px'
  };

  return (
    <div style={cardStyle}>
      <h3 style={{ margin: '0 0 10px 0' }}>{name}</h3>
      <p style={{ margin: 0 }}>Возраст: {age}</p>
    </div>
  );
}

export default UserCard;