import React from 'react';

const TodoItem = React.memo(function TodoItem({ todo, onDelete, onToggle }) {

  console.log(`Render TodoItem: ${todo.id}`);

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: '10px', 
      marginBottom: '10px',
      padding: '5px',
      borderBottom: '1px solid #eee'
    }}>
      <input 
        type="checkbox" 
        checked={todo.completed} 
        onChange={() => onToggle(todo.id)} 
        style={{ cursor: 'pointer' }}
      />

      <span style={{ 
        textDecoration: todo.completed ? 'line-through' : 'none',
        color: todo.completed ? 'gray' : 'black',
        flexGrow: 1
      }}>
        {todo.text}
      </span>

      <button onClick={() => onDelete(todo.id)} style={{ cursor: 'pointer' }}>
        Удалить
      </button>
    </div>
  );
});

export default TodoItem;