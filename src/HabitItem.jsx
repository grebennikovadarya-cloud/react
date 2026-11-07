import React, { useState } from 'react';

const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

function HabitItem({ habit, onDelete, onToggleDay, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(habit.name);
  const [editIcon, setEditIcon] = useState(habit.icon);
  const handleSave = () => {
    onEdit(habit.id, editName, editIcon);
    setIsEditing(false);
  };

  return (
    <div style={{ 
      border: '1px solid #ccc', 
      padding: '15px', 
      marginBottom: '15px', 
      borderRadius: '8px',
      backgroundColor: '#f9f9f9'
    }}>
      {isEditing ? (
        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <input 
            value={editIcon} 
            onChange={(e) => setEditIcon(e.target.value)} 
            style={{ width: '40px', textAlign: 'center' }} 
            maxLength="2"
          />
          <input 
            value={editName} 
            onChange={(e) => setEditName(e.target.value)} 
            style={{ flexGrow: 1, padding: '5px' }}
          />
          <button onClick={handleSave} style={{ cursor: 'pointer' }}>Сохранить</button>
          <button onClick={() => setIsEditing(false)} style={{ cursor: 'pointer' }}>Отмена</button>
        </div>
      ) : (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <h3 style={{ margin: 0 }}>
            <span style={{ marginRight: '10px' }}>{habit.icon}</span>
            {habit.name}
          </h3>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={() => setIsEditing(true)} style={{ cursor: 'pointer' }}>✏️ Изменить</button>
            <button onClick={() => onDelete(habit.id)} style={{ cursor: 'pointer', color: 'red' }}>🗑 Удалить</button>
          </div>
        </div>
      )}

      <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap', marginTop: '15px' }}>
        {daysOfWeek.map((day, index) => (
          <label key={day} style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            border: '1px solid #ddd', 
            padding: '5px', 
            borderRadius: '5px', 
            cursor: 'pointer',
            backgroundColor: habit.completedDays.includes(index) ? '#c8e6c9' : 'white'
          }}>
            <span style={{ fontSize: '12px', marginBottom: '5px' }}>{day}</span>
            <input 
              type="checkbox" 
              checked={habit.completedDays.includes(index)} 
              onChange={() => onToggleDay(habit.id, index)}
            />
          </label>
        ))}
      </div>
    </div>
  );
}

export default HabitItem;