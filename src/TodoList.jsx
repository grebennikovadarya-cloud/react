import React, { useState } from 'react';
import './TodoList.css'; 

function TodoList() {
  const [tasks, setTasks] = useState([]);

  const [inputValue, setInputValue] = useState('');

  const addTask = () => {
    if (inputValue.trim() === '') return;

    const newTask = {
      id: Date.now(), 
      text: inputValue,
      completed: false, 
    };

    setTasks([...tasks, newTask]);
    setInputValue(''); 
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <div className="todo-container">
      <h2>Мой список дел</h2>

      <div className="input-group">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Введите новую задачу..."
        />
        <button onClick={addTask}>Добавить</button>
      </div>

      <p className="counter">
        Выполнено {completedCount} из {tasks.length}
      </p>

      {tasks.length === 0 ? (
        <p className="empty-message">Нет задач</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id} className={task.completed ? 'completed' : ''}>
              <label>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                />
                {task.text}
              </label>
              <button className="delete-btn" onClick={() => deleteTask(task.id)}>
                Удалить
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;