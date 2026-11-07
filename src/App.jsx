import React, { useState, useCallback } from 'react';
import TodoItem from './TodoItem';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Прогулка', completed: false },
    { id: 2, text: 'Сходить в магазин', completed: true },
    { id: 3, text: 'Тренировка', completed: false },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    if (inputValue.trim() === '') return;
    
    const newTodo = {
      id: Date.now(), 
      text: inputValue,
      completed: false
    };
    
    setTodos([...todos, newTodo]);
    setInputValue(''); 
  };

  const handleDelete = useCallback((id) => {
    setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id));
  }, []);

  const handleToggle = useCallback((id) => {
    setTodos((prevTodos) => 
      prevTodos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '500px' }}>
      <h2>Список задач (React.memo)</h2>
      
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Новая задача" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ padding: '5px', flexGrow: 1 }}
        />
        <button onClick={handleAdd} style={{ padding: '5px 15px', cursor: 'pointer' }}>
          Добавить
        </button>
      </div>

      <div>
        {todos.map(todo => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            onDelete={handleDelete} 
            onToggle={handleToggle} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;